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

// プロフィールを保証する（無ければローカルの playerId / 名前 / アイコン / 一言で作成）→ Promise<profile>
function ensureMilliproProfile(uid) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  var localId = ud && ud.playerId;
  var localName = ud && ud.playerName;
  var localIcon = ud && ud.icon;
  var localComment = ud && ud.comment;

  return firebase.database().ref("millipro/users/" + uid + "/profile").once("value").then(function (snap) {
    var p = snap.val();
    var now = Date.now();
    if (p && typeof p === "object") {
      var changed = false;
      if (!p.playerId) { p.playerId = localId || newPlayerIdFallback(); changed = true; }
      if (!p.playerName && localName) { p.playerName = localName; changed = true; }
      if (!p.icon && localIcon) { p.icon = localIcon; changed = true; }
      if (!p.comment && localComment) { p.comment = localComment; changed = true; }
      if (changed) firebase.database().ref("millipro/users/" + uid + "/profile").set(p);
      return p;
    }
    var np = {
      playerId: localId || newPlayerIdFallback(),
      playerName: localName || "",
      icon: localIcon || "",
      comment: localComment || "",
      updatedAt: now
    };
    firebase.database().ref("millipro/users/" + uid + "/profile").set(np);
    return np;
  });
}

// profile の playerId / playerName / icon / comment をこの端末の localStorage に反映（他項目は保持）
function applyMilliproProfile(profile) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  if (!ud || typeof ud !== "object") ud = { createdAt: Date.now() };
  ud.playerId = profile.playerId;
  if (profile.playerName) ud.playerName = profile.playerName;
  if (profile.icon) ud.icon = profile.icon;
  if (profile.comment) ud.comment = profile.comment;
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

// localStorage の連携情報と Auth メールをまとめて返す
function mpProfileInfo() {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  var pid = ud && ud.playerId ? ud.playerId : "";
  var name = ud && ud.playerName ? ud.playerName : "";
  var icon = ud && ud.icon ? ud.icon : "";
  var comment = ud && ud.comment ? ud.comment : "";
  var email = "";
  try {
    if (isAuthAvailable() && firebase.auth().currentUser) email = firebase.auth().currentUser.email || "";
  } catch (e) {}
  return { pid: pid, name: name, icon: icon, comment: comment, email: email };
}

// profile.icon (絵文字 or 画像 dataURL) を表示する（§2-4 参考実装と同じロジック）
function renderUserIcon(el, user) {
  if (!el) return;
  var icon = user && user.icon;
  if (typeof icon === "string" && icon.indexOf("data:image/") === 0) {
    el.innerHTML = '<img src="' + icon + '" alt="icon">';
  } else if (icon) {
    el.textContent = icon;
  } else {
    el.textContent = user && user.playerName ? user.playerName.charAt(0) : "?";
  }
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
  var pl = document.getElementById("profile-label");
  if (pl) {
    var info = mpProfileInfo();
    pl.textContent = info.name || info.pid || "ゲスト";
  }
  var pbtn = document.getElementById("profile-btn");
  var picon = document.getElementById("profile-header-icon");
  if (pbtn && picon) {
    renderUserIcon(picon, info);
    picon.style.display = info.icon ? "" : "none";
  }
}

// ログイン / 新規登録のタブ切替
function mpTab(tab) {
  var loginPanel = document.getElementById("mp-panel-login");
  var signupPanel = document.getElementById("mp-panel-signup");
  var loginTab = document.getElementById("mp-tab-login");
  var signupTab = document.getElementById("mp-tab-signup");
  if (!loginPanel || !signupPanel) return;
  loginPanel.style.display = tab === "login" ? "block" : "none";
  signupPanel.style.display = tab === "signup" ? "block" : "none";
  if (loginTab) loginTab.className = tab === "login" ? "mp-tab active" : "mp-tab";
  if (signupTab) signupTab.className = tab === "signup" ? "mp-tab active" : "mp-tab";
  var msg = document.getElementById("mp-msg");
  if (msg) msg.textContent = "";
}

// パスワードの表示 / 非表示を切り替え
function mpToggle(inputId, btnId) {
  var input = document.getElementById(inputId);
  var btn = document.getElementById(btnId);
  if (!input) return;
  var show = input.type === "password";
  input.type = show ? "text" : "password";
  if (btn) btn.textContent = show ? "🙈" : "👁";
}

function mpAuthError(e) {
  var j = e && e.code ? e.code : String(e);
  if (j.indexOf("email-already-in-use") >= 0) return "そのメールは既に登録されています。ログインしてください";
  if (j.indexOf("wrong-password") >= 0 || j.indexOf("user-not-found") >= 0) return "メールまたはパスワードが違います";
  if (j.indexOf("weak-password") >= 0) return "パスワードは6文字以上にしてください";
  if (j.indexOf("invalid-email") >= 0) return "メールアドレスの形式が正しくありません";
  return "エラー: " + j;
}

function mpSubmit(isSignup) {
  var email = document.getElementById(isSignup ? "mp2-email" : "mp-email").value.trim();
  var pass = document.getElementById(isSignup ? "mp2-pass" : "mp-pass").value;
  var msg = document.getElementById("mp-msg");
  if (!msg) return;
  if (!email || !pass) { msg.textContent = "メールとパスワードを入力してください"; return; }
  if (isSignup) {
    var pass2 = document.getElementById("mp2-pass2").value;
    if (pass !== pass2) { msg.textContent = "パスワードが一致しません"; return; }
  }
  var p = isSignup ? milliproSignup(email, pass) : milliproLogin(email, pass);
  p.then(function () {
    msg.textContent = isSignup ? "登録しました。playerId を端末に反映中..." : "連携しました。playerId を端末に反映中...";
  }).catch(function (e) {
    msg.textContent = mpAuthError(e);
  });
}

function mpOpen() {
  var popup = document.getElementById("login-popup");
  if (popup) popup.classList.add("open");
}

function mpClose() {
  var popup = document.getElementById("login-popup");
  if (popup) popup.classList.remove("open");
}

// ---------- 連携案内バナー（ログイン任意・§2-4） ----------

// 未ログイン & 連携ID未設定ならバナーを表示（ページ表示時に毎回判定。あとで閉じても次回また出る）
function mpRefreshBanner() {
  var b = document.getElementById("mp-banner");
  if (!b) return;
  var connected = (isAuthAvailable() && getMilliproUid()) || !!getMilliproPlayerId();
  b.style.display = connected ? "none" : "flex";
}

function mpHideBanner() {
  var b = document.getElementById("mp-banner");
  if (b) b.style.display = "none";
}

// 「連携する」→ アカウント連携UI（モーダル）を開いて案内する
function mpOpenAccount() {
  var popup = document.getElementById("login-popup");
  if (popup) {
    mpOpen();
    return;
  }
  var el = document.getElementById("mp-account");
  if (el) {
    el.style.display = "block";
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
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
  mpRefreshBanner();
  alert("連携IDを保存しました: " + v);
}

initFirebase();

// 画面初期化時に1回呼ぶ（auth 未設定でも mpRender(null) になるだけで安全）
onMilliproAuth(function (uid) {
  if (uid) {
    completeMilliproLogin(uid).then(function () {
      mpRender(uid);
      mpRefreshBanner();
    });
  } else {
    mpRender(null);
    mpRefreshBanner();
  }
});

if (document.getElementById("mp-popup-close")) {
  document.getElementById("mp-popup-close").addEventListener("click", function () {
    mpClose();
  });
}

// フォームのEnterキーで送信
(function () {
  var le = document.getElementById("mp-email");
  var lp = document.getElementById("mp-pass");
  if (le && lp) {
    le.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(false); });
    lp.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(false); });
  }
  var ne = document.getElementById("mp2-email");
  var np = document.getElementById("mp2-pass");
  var np2 = document.getElementById("mp2-pass2");
  if (ne && np && np2) {
    [ne, np, np2].forEach(function (inp) {
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(true); });
    });
  }
})();
