// Firebase 初期化・共通ヘルパ（Milli Games / Milli Unishare 共有バックエンド連携）
// 設定手順は「連携ハンドオフ.md」§6 を参照。
// config 未設定（apiKey が空）の間は連携機能は無効（エラーも出さない）
var firebaseReady = false;

function getFirebaseConfig() {
  if (typeof FIREBASE_CONFIG !== "undefined" && FIREBASE_CONFIG) return FIREBASE_CONFIG;
  if (typeof firebaseConfig !== "undefined" && firebaseConfig) return firebaseConfig;
  return null;
}

function initFirebase() {
  if (firebaseReady || typeof firebase === "undefined") return;
  var cfg = getFirebaseConfig();
  if (!cfg || !cfg.apiKey || !cfg.databaseURL) return;
  firebase.initializeApp(cfg);
  firebaseReady = true;
}

function firebaseAvailable() {
  return firebaseReady && typeof firebase !== "undefined";
}

// 本アプリ（Millipro-Chronicle）が保存する localStorage の playerId を読む
function getMilliproPlayerId() {
  try {
    var ud = JSON.parse(localStorage.getItem("millipro_userdata"));
    return ud && ud.playerId ? ud.playerId : null;
  } catch (e) { return null; }
}

// 連携IDの手動設定（ログイン不要フォールバック用・§1-4）
function setMilliproPlayerId(id) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  if (!ud || typeof ud !== "object") ud = { createdAt: Date.now() };
  ud.playerId = String(id);
  ud.updatedAt = Date.now();
  localStorage.setItem("millipro_userdata", JSON.stringify(ud));
  return ud;
}

// ミニゲームクリアイベントを送信（ゲームIDはサイト内で一意な小文字・ハイフン形式）
function recordGameClear(gameId, score) {
  initFirebase();
  var pid = getMilliproPlayerId();
  if (!firebaseReady || !pid || !gameId) return;
  firebase.database().ref("millipro/gameEvents/" + pid + "/" + gameId + "/" + Date.now())
    .set({ score: score || 0, playedAt: Date.now() })
    .catch(function (e) { console.warn("gameEvent write failed", e); });
}

// ---------- アカウント連携（Firebase Auth・§2-4） ----------

function isAuthAvailable() {
  return firebaseAvailable() && typeof firebase.auth === "function";
}

function getMilliproUid() {
  if (!isAuthAvailable()) return null;
  var u = firebase.auth().currentUser;
  return u ? u.uid : null;
}

// ログイン状態の変化を監視（未ログイン/未設定なら null を渡す）
function onMilliproAuth(cb) {
  if (!isAuthAvailable()) { cb(null); return; }
  firebase.auth().onAuthStateChanged(function (user) {
    cb(user ? user.uid : null);
  });
}

function milliproLogin(email, password) {
  if (!isAuthAvailable()) return Promise.reject(new Error("auth unavailable"));
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function milliproSignup(email, password) {
  if (!isAuthAvailable()) return Promise.reject(new Error("auth unavailable"));
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function milliproLogout() {
  if (!isAuthAvailable()) return Promise.resolve();
  return firebase.auth().signOut();
}

function newPlayerIdFallback() {
  if (typeof crypto !== "undefined" && crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return "P" + Date.now();
}

// プロフィールを保証する（無ければローカルの playerId で作成）→ Promise<profile>
function ensureMilliproProfile(uid) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  var localId = ud && ud.playerId;
  var localName = ud && ud.playerName;

  return firebase.database().ref("millipro/users/" + uid + "/profile").once("value").then(function (snap) {
    var p = snap.val();
    var now = Date.now();
    if (p && typeof p === "object") {
      var changed = false;
      if (!p.playerId) { p.playerId = localId || newPlayerIdFallback(); changed = true; }
      if (!p.playerName && localName) { p.playerName = localName; changed = true; }
      if (changed) firebase.database().ref("millipro/users/" + uid + "/profile").set(p);
      return p;
    }
    var np = {
      playerId: localId || newPlayerIdFallback(),
      playerName: localName || "",
      updatedAt: now
    };
    firebase.database().ref("millipro/users/" + uid + "/profile").set(np);
    return np;
  });
}

// profile の playerId / playerName をこの端末の localStorage に反映（他項目は保持）
function applyMilliproProfile(profile) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  if (!ud || typeof ud !== "object") ud = { createdAt: Date.now() };
  ud.playerId = profile.playerId;
  if (profile.playerName) ud.playerName = profile.playerName;
  ud.updatedAt = Date.now();
  localStorage.setItem("millipro_userdata", JSON.stringify(ud));
  return ud;
}

// ログイン時にまとめて実行（Unishare / Games 版。gamedata 同期は本アプリのみの仕事）
function completeMilliproLogin(uid) {
  return ensureMilliproProfile(uid).then(function (profile) {
    applyMilliproProfile(profile);
    return profile;
  });
}

// ---------- アカウント連携UI（§2-4） ----------

function mpRender(uid) {
  var form = document.getElementById("mp-account-form");
  var ok = document.getElementById("mp-account-ok");
  if (!form || !ok) return;
  if (uid) {
    form.style.display = "none";
    ok.style.display = "block";
    document.getElementById("mp-pid").textContent = getMilliproPlayerId() || uid;
  } else {
    form.style.display = "block";
    ok.style.display = "none";
  }
  var ms = document.getElementById("mp-menu-status");
  if (ms) {
    var pid = getMilliproPlayerId();
    ms.textContent = pid ? "連携ID: " + pid : "未連携";
    ms.classList.toggle("linked", !!pid);
  }
}

function mpOpen() {
  var popup = document.getElementById("login-popup");
  if (popup) popup.classList.add("open");
}

function mpClose(skip) {
  var popup = document.getElementById("login-popup");
  if (popup) popup.classList.remove("open");
  if (skip) {
    try { sessionStorage.setItem("milli_login_skipped", "1"); } catch (e) {}
  }
}

// localStorage に playerId が無い（未ログイン）ならポップアップを表示する
function mpSyncPopup() {
  var popup = document.getElementById("login-popup");
  if (!popup) return;
  if (getMilliproPlayerId()) {
    popup.classList.remove("open");
    return;
  }
  try { if (sessionStorage.getItem("milli_login_skipped")) return; } catch (e) {}
  setTimeout(function () { popup.classList.add("open"); }, 400);
}

function mpSubmit(isSignup) {
  var email = document.getElementById("mp-email").value.trim();
  var pass = document.getElementById("mp-pass").value;
  var msg = document.getElementById("mp-msg");
  if (!msg) return;
  if (!email || !pass) { msg.textContent = "メールとパスワードを入力してください"; return; }
  var p = isSignup ? milliproSignup(email, pass) : milliproLogin(email, pass);
  p.then(function () {
    msg.textContent = "連携しました。playerId を端末に反映中...";
  }).catch(function (e) {
    var j = e && e.code ? e.code : String(e);
    if (j.indexOf("email-already-in-use") >= 0) msg.textContent = "そのメールは既に登録されています。ログインしてください";
    else if (j.indexOf("wrong-password") >= 0 || j.indexOf("user-not-found") >= 0) msg.textContent = "メールまたはパスワードが違います";
    else if (j.indexOf("weak-password") >= 0) msg.textContent = "パスワードは6文字以上にしてください";
    else if (j.indexOf("invalid-email") >= 0) msg.textContent = "メールアドレスの形式が正しくありません";
    else msg.textContent = "エラー: " + j;
  });
}

function mpLogout() {
  milliproLogout().then(mpRender);
}

function mpCopyId() {
  var pid = getMilliproPlayerId();
  if (!pid) { alert("連携IDが未設定です"); return; }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(pid).then(function () { alert("コピーしました: " + pid); });
  } else {
    var t = document.createElement("textarea");
    t.value = pid;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
    alert("コピーしました: " + pid);
  }
}

function mpSetId() {
  var v = document.getElementById("mp-id").value.trim();
  if (!v) return;
  setMilliproPlayerId(v);
  mpRender(getMilliproUid());
  mpSyncPopup();
  alert("連携IDを保存しました: " + v);
}

initFirebase();

// 画面初期化時に1回呼ぶ（auth 未設定でも mpRender(null) になるだけで安全）
onMilliproAuth(function (uid) {
  if (uid) {
    completeMilliproLogin(uid).then(function () { mpRender(uid); mpSyncPopup(); });
  } else {
    mpRender(null);
    mpSyncPopup();
  }
});

if (document.getElementById("mp-popup-close")) {
  document.getElementById("mp-popup-close").addEventListener("click", function () {
    mpClose(true);
  });
}
