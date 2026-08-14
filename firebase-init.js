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

// 本アプリ（Millipro-Chronicle）が保存する localStorage の playerId を読む
function getMilliproPlayerId() {
  try {
    var ud = JSON.parse(localStorage.getItem("millipro_userdata"));
    return ud && ud.playerId ? ud.playerId : null;
  } catch (e) { return null; }
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

initFirebase();
