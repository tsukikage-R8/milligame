(function () {
  "use strict";

  // ============================================
  // 定数
  // ============================================
  var BPM = 148;
  var BEAT_MS = 60000 / BPM;
  var BEATS_PER_BAR = 4;
  var START_OFFSET_BEATS = 3;

  var D = { B: "beginner", I: "intermediate", A: "advanced" };

  var POINTS = {};
  POINTS[D.B] = 100;
  POINTS[D.I] = 200;
  POINTS[D.A] = 300;

  var AUDIO_SRC = "audio/\u3069\u3063\u3061\uff01\uff1f_inst.wav";

  // ============================================
  // 9つの出題スロット
  // ============================================
  var SLOTS = [
    { bar: 1, beat: 1, beatsToAnswer: 3, diff: D.B },
    { bar: 2, beat: 1, beatsToAnswer: 3, diff: D.B },
    { bar: 3, beat: 1, beatsToAnswer: 3, diff: D.B },
    { bar: 4, beat: 1, beatsToAnswer: 19, diff: D.A },
    { bar: 9, beat: 1, beatsToAnswer: 3, diff: D.I },
    { bar: 10, beat: 1, beatsToAnswer: 3, diff: D.I },
    { bar: 11, beat: 1, beatsToAnswer: 3, diff: D.I },
    { bar: 12, beat: 1, beatsToAnswer: 11, diff: D.A },
    { bar: 15, beat: 1, beatsToAnswer: 6, diff: D.B }
  ];

  function slotTime(slot) {
    var absBeat = slot.bar * BEATS_PER_BAR + slot.beat;
    return (absBeat - START_OFFSET_BEATS) * BEAT_MS / 1000;
  }

  // ============================================
  // 問題プール（36問）
  // ============================================
  var POOL = [
    // ===== 初級 =====
    { id: "b1", diff: D.B, q: "音ノ乃のののイメージカラーは？", left: "紫", right: "赤", correct: 0 },
    { id: "b2", diff: D.B, q: "甘狼このみの診断タイプは？", left: "情熱クリエイター", right: "カラフルアーティスト", correct: 0 },
    { id: "b3", diff: D.B, q: "音ノ瀬らこの診断タイプは？", left: "ムードメーカー", right: "ギャップ系ミステリアス", correct: 0 },
    { id: "b4", diff: D.B, q: "ゆらぎゆらの診断タイプは？", left: "ヒーリングタイプ", right: "クールロックオン", correct: 0 },
    { id: "b5", diff: D.B, q: "小廻こまの診断タイプは？", left: "わくわくプレイヤー", right: "マルチクリエイター", correct: 0 },
    { id: "b6", diff: D.B, q: "雨夜リズの診断タイプは？", left: "ギャップ系ミステリアス", right: "ムードメーカー", correct: 0 },
    { id: "b7", diff: D.B, q: "眠雲ツクリの診断タイプは？", left: "マルチクリエイター", right: "情熱クリエイター", correct: 0 },
    { id: "b8", diff: D.B, q: "虹深°ぬふの診断タイプは？", left: "カラフルアーティスト", right: "ヒーリングタイプ", correct: 0 },
    { id: "b9", diff: D.B, q: "夕霧レイの診断タイプは？", left: "クールロックオン", right: "個性派エンターテイナー", correct: 0 },
    { id: "b10", diff: D.B, q: "あくび・でもんすぺーどの診断タイプは？", left: "個性派エンターテイナー", right: "わくわくプレイヤー", correct: 0 },
    { id: "b11", diff: D.B, q: "ミリちゃんの診断タイプは？", left: "ミリちゃん", right: "ハッピーアーティスト", correct: 0 },
    { id: "b12", diff: D.B, q: "音ノ乃ののの診断タイプは？", left: "ハッピーアーティスト", right: "情熱クリエイター", correct: 0 },

    // ===== 中級 =====
    { id: "i1", diff: D.I, q: "甘狼このみのイメージカラーは？", left: "赤", right: "青", correct: 0 },
    { id: "i2", diff: D.I, q: "音ノ瀬らこのイメージカラーは？", left: "黄", right: "緑", correct: 0 },
    { id: "i3", diff: D.I, q: "音ノ乃のののファンネームは？", left: "ののふぁむ", right: "このみん", correct: 0 },
    { id: "i4", diff: D.I, q: "「Princess Viral」のアーティストは？", left: "音ノ乃のの", right: "甘狼このみ", correct: 0 },
    { id: "i5", diff: D.I, q: "「ルミナス」のアーティストは？", left: "音ノ瀬らこ", right: "音ノ乃のの", correct: 0 },
    { id: "i6", diff: D.I, q: "小廻こまのイメージカラーは？", left: "オレンジ", right: "紫", correct: 0 },
    { id: "i7", diff: D.I, q: "ゆらぎゆらのイメージカラーは？", left: "青", right: "黄", correct: 0 },
    { id: "i8", diff: D.I, q: "夕霧レイのイメージカラーは？", left: "白", right: "黒", correct: 0 },
    { id: "i9", diff: D.I, q: "雨夜リズのイメージカラーは？", left: "水色", right: "桃色", correct: 0 },
    { id: "i10", diff: D.I, q: "あくび・でもんすぺーどのイメージカラーは？", left: "赤紫", right: "金色", correct: 0 },
    { id: "i11", diff: D.I, q: "眠雲ツクリのイメージカラーは？", left: "水色", right: "灰色", correct: 0 },
    { id: "i12", diff: D.I, q: "虹深°ぬふのイメージカラーは？", left: "虹色", right: "黒", correct: 0 },

    // ===== 上級 =====
    { id: "a1", diff: D.A, q: "甘狼このみの診断で最も高いパラメータ2つは？", left: "情熱と創作", right: "行動力と社交性", correct: 0 },
    { id: "a2", diff: D.A, q: "雨夜リズの診断で最も高いパラメータは？", left: "ミステリアスとPON度", right: "癒しとクール", correct: 0 },
    { id: "a3", diff: D.A, q: "ゆらぎゆらの診断で100のパラメータは？", left: "癒し", right: "遊び心", correct: 0 },
    { id: "a4", diff: D.A, q: "小廻こまの診断で最も高いパラメータは？", left: "遊び心 (100)", right: "社交性 (80)", correct: 0 },
    { id: "a5", diff: D.A, q: "夕霧レイの診断で最も高いパラメータは？", left: "クール (100)", right: "行動力 (70)", correct: 0 },
    { id: "a6", diff: D.A, q: "虹深°ぬふの診断で最も高いパラメータは？", left: "創作 (100)", right: "情熱 (80)", correct: 0 },
    { id: "a7", diff: D.A, q: "ミリプロ内で「PON度」が最も高いタレントは？", left: "雨夜リズ (100)", right: "音ノ乃のの (50)", correct: 0 },
    { id: "a8", diff: D.A, q: "「Milli Spectrum」の質問数は？", left: "20問", right: "10問", correct: 0 },
    { id: "a9", diff: D.A, q: "眠雲ツクリの診断で最も高いパラメータは？", left: "創作 (90)", right: "行動力 (70)", correct: 0 },
    { id: "a10", diff: D.A, q: "音ノ瀬らこの診断で最も高いパラメータは？", left: "遊び心 (90)", right: "癒し (60)", correct: 0 },
    { id: "a11", diff: D.A, q: "あくび・でもんすぺーどの診断で最も高いパラメータは？", left: "クール (90)", right: "行動力 (70)", correct: 0 },
    { id: "a12", diff: D.A, q: "音ノ乃ののに最も近い診断タイプのタレントは？", left: "甘狼このみ", right: "夕霧レイ", correct: 0 }
  ];

  // ============================================
  // DOM参照
  // ============================================
  var $ = function (id) { return document.getElementById(id); };
  var el = {
    startOverlay: $("overlay-start"),
    resultOverlay: $("overlay-result"),
    screenPlay: $("screen-play"),
    btnStart: $("btn-start"),
    btnRetry: $("btn-retry"),
    btnSave: $("btn-save"),
    btnX: $("btn-x"),
    qNumber: $("q-number"),
    qText: $("q-text"),
    qDiff: $("q-difficulty"),
    leftBtn: $("btn-left"),
    rightBtn: $("btn-right"),
    leftText: $("left-text"),
    rightText: $("right-text"),
    timerFill: $("timer-bar-fill"),
    feedback: $("feedback-overlay"),
    feedbackIcon: $("feedback-icon"),
    feedbackText: $("feedback-text"),
    hudProgress: $("hud-progress"),
    comboDisplay: $("combo-display"),
    accDisplay: $("accuracy-display"),
    scoreDisplay: $("score-display"),
    finalScore: $("final-score"),
    resultCorrect: $("result-correct"),
    resultTotal: $("result-total"),
    resultAcc: $("result-accuracy"),
    resultMaxCombo: $("result-maxcombo"),
    resultRank: $("result-rank"),
    rB: $("r-beginner"),
    rI: $("r-intermediate"),
    rA: $("r-advanced"),
    shareCanvas: $("share-canvas"),
    questionCard: $("question-card")
  };

  // ============================================
  // 状態
  // ============================================
  var audio = null;
  var questions = [];
  var cursor = -1;
  var score = 0;
  var combo = 0;
  var maxCombo = 0;
  var answerCount = 0;
  var correctCount = 0;
  var diffResult = {};
  diffResult[D.B] = { total: 0, correct: 0 };
  diffResult[D.I] = { total: 0, correct: 0 };
  diffResult[D.A] = { total: 0, correct: 0 };
  var isPlaying = false;
  var qActive = false;
  var qDone = false;
  var animId = null;
  var timerStart = 0;
  var timerDur = 0;
  var lastResult = null;

  // ============================================
  // ユーティリティ
  // ============================================
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ============================================
  // 問題選択
  // ============================================
  function buildQuiz() {
    var pool = POOL.slice();
    var byDiff = {};
    byDiff[D.B] = []; byDiff[D.I] = []; byDiff[D.A] = [];
    for (var i = 0; i < pool.length; i++) {
      byDiff[pool[i].diff].push(pool[i]);
    }
    shuffle(byDiff[D.B]);
    shuffle(byDiff[D.I]);
    shuffle(byDiff[D.A]);

    var bIdx = 0, iIdx = 0, aIdx = 0;
    questions = [];
    for (var s = 0; s < SLOTS.length; s++) {
      var slot = SLOTS[s];
      var q = null;
      if (slot.diff === D.B && bIdx < byDiff[D.B].length) {
        q = byDiff[D.B][bIdx++];
      } else if (slot.diff === D.I && iIdx < byDiff[D.I].length) {
        q = byDiff[D.I][iIdx++];
      } else if (slot.diff === D.A && aIdx < byDiff[D.A].length) {
        q = byDiff[D.A][aIdx++];
      }
      if (!q) q = { diff: D.B, q: "?", left: "？", right: "？", correct: 0 };
      q.slot = s;
      q.bar = slot.bar;
      q.beat = slot.beat;
      q.beatsToAnswer = slot.beatsToAnswer;
      questions.push(q);
    }
  }

  // ============================================
  // オーディオ
  // ============================================
  function initAudio() {
    audio = new Audio(AUDIO_SRC);
    audio.preload = "auto";
  }

  function getAudioTime() {
    try { return audio ? audio.currentTime : 0; } catch (e) { return 0; }
  }

  // ============================================
  // UI
  // ============================================
  function feedback(ok, pts) {
    el.feedbackIcon.textContent = ok ? "⭕" : "❌";
    el.feedbackText.textContent = ok ? "+" + pts : "\u30DF\u30B9";
    el.feedbackText.style.color = ok ? "#4caf50" : "#e74c3c";
    el.feedback.classList.remove("feedback-hidden");
    setTimeout(function () { el.feedback.classList.add("feedback-hidden"); }, 300);
  }

  function hudUpdate() {
    el.hudProgress.textContent = "Q" + (cursor + 1) + " / " + questions.length;
    el.comboDisplay.textContent = combo;
    el.accDisplay.textContent = answerCount > 0 ? Math.round(correctCount / answerCount * 100) + "%" : "--";
    el.scoreDisplay.textContent = score;
  }

  function showQ(q) {
    qActive = true;
    qDone = false;

    el.qNumber.textContent = "Q" + (q.slot + 1);
    var dL = "", dC = "";
    if (q.diff === D.B) { dL = "\u521D\u7D1A"; dC = "diff-beginner"; }
    else if (q.diff === D.I) { dL = "\u4E2D\u7D1A"; dC = "diff-intermediate"; }
    else { dL = "\u4E0A\u7D1A"; dC = "diff-advanced"; }
    el.qDiff.textContent = dL;
    el.qDiff.className = "diff-badge " + dC;

    el.qText.textContent = q.q;
    el.leftText.textContent = q.left;
    el.rightText.textContent = q.right;

    el.leftBtn.className = "option-btn";
    el.rightBtn.className = "option-btn";
    el.leftBtn.disabled = false;
    el.rightBtn.disabled = false;

    timerDur = q.beatsToAnswer * BEAT_MS;
    timerStart = performance.now();
    el.timerFill.style.width = "100%";
    el.timerFill.style.background = "linear-gradient(90deg, #8582fb, #b388ff)";

    el.questionCard.style.transition = "none";
    el.questionCard.style.transform = "scale(0.9)";
    el.questionCard.style.opacity = "0";
    setTimeout(function () {
      el.questionCard.style.transition = "transform 0.15s ease, opacity 0.15s ease";
      el.questionCard.style.transform = "scale(1)";
      el.questionCard.style.opacity = "1";
    }, 10);

    hudUpdate();
  }

  function waitForQ(idx) {
    if (idx >= questions.length) { checkEnd(); return; }
    var q = questions[idx];
    var t = slotTime({ bar: q.bar, beat: q.beat });

    function poll() {
      if (!isPlaying) return;
      if (getAudioTime() >= t) {
        cursor = idx;
        showQ(q);
      } else {
        setTimeout(poll, 50);
      }
    }
    poll();
  }

  function scheduleNext() {
    setTimeout(function () {
      el.questionCard.style.transition = "transform 0.1s ease, opacity 0.1s ease";
      el.questionCard.style.transform = "scale(0.9)";
      el.questionCard.style.opacity = "0";
      setTimeout(function () { waitForQ(cursor + 1); }, 100);
    }, 400);
  }

  // ============================================
  // タイマー
  // ============================================
  function updateTimer() {
    if (!qActive || qDone) return;
    var elapsed = performance.now() - timerStart;
    var remain = Math.max(0, timerDur - elapsed);
    var pct = remain / timerDur * 100;
    el.timerFill.style.width = pct + "%";
    if (pct < 30) {
      el.timerFill.style.background = "linear-gradient(90deg, #e74c3c, #ff9800)";
    }
    if (elapsed >= timerDur) { timeoutQ(); }
  }

  function timeoutQ() {
    if (qDone) return;
    qDone = true; qActive = false;
    combo = 0;
    answerCount++;
    var q = questions[cursor];
    diffResult[q.diff].total++;

    el.leftBtn.disabled = true;
    el.rightBtn.disabled = true;
    el.leftBtn.classList.add("disabled");
    el.rightBtn.classList.add("disabled");
    if (q.correct === 0) el.leftBtn.classList.add("reveal-correct");
    else el.rightBtn.classList.add("reveal-correct");

    feedback(false, 0);
    hudUpdate();
    scheduleNext();
  }

  // ============================================
  // 回答
  // ============================================
  function answer(choice) {
    if (qDone) return;
    qDone = true; qActive = false;

    var q = questions[cursor];
    var ok = (choice === q.correct);
    answerCount++;
    diffResult[q.diff].total++;

    el.leftBtn.disabled = true;
    el.rightBtn.disabled = true;
    el.leftBtn.classList.add("disabled");
    el.rightBtn.classList.add("disabled");

    if (ok) {
      correctCount++;
      diffResult[q.diff].correct++;
      combo++;
      if (combo > maxCombo) maxCombo = combo;

      var base = POINTS[q.diff];
      var elapsed = performance.now() - timerStart;
      var remain = Math.max(0, timerDur - elapsed);
      var speed = Math.floor(base * 0.5 * (remain / timerDur));
      var comboPts = Math.floor(combo * 10);
      var total = base + speed + comboPts;
      score += total;

      (choice === 0 ? el.leftBtn : el.rightBtn).classList.add("selected-correct");
      feedback(true, total);
    } else {
      combo = 0;
      (choice === 0 ? el.leftBtn : el.rightBtn).classList.add("selected-wrong");
      if (q.correct === 0) el.leftBtn.classList.add("reveal-correct");
      else el.rightBtn.classList.add("reveal-correct");
      feedback(false, 0);
    }

    hudUpdate();
    scheduleNext();
  }

  // ============================================
  // 入力
  // ============================================
  document.addEventListener("keydown", function (e) {
    if (e.code === "KeyA" || e.code === "ArrowLeft" || e.code === "Digit1") {
      e.preventDefault(); if (isPlaying) answer(0);
    }
    if (e.code === "KeyD" || e.code === "ArrowRight" || e.code === "Digit2") {
      e.preventDefault(); if (isPlaying) answer(1);
    }
  });

  el.leftBtn.addEventListener("click", function () { if (isPlaying) answer(0); });
  el.rightBtn.addEventListener("click", function () { if (isPlaying) answer(1); });

  // ============================================
  // ゲームループ
  // ============================================
  function loop() {
    if (!isPlaying) return;
    updateTimer();
    animId = requestAnimationFrame(loop);
  }

  // ============================================
  // ゲーム制御
  // ============================================
  function startGame() {
    buildQuiz();
    cursor = -1;
    score = 0; combo = 0; maxCombo = 0;
    answerCount = 0; correctCount = 0;
    diffResult = {};
    diffResult[D.B] = { total: 0, correct: 0 };
    diffResult[D.I] = { total: 0, correct: 0 };
    diffResult[D.A] = { total: 0, correct: 0 };
    isPlaying = false; qActive = false; qDone = false;

    el.scoreDisplay.textContent = "0";
    el.comboDisplay.textContent = "0";
    el.accDisplay.textContent = "--";
    el.timerFill.style.width = "100%";
    el.timerFill.style.background = "linear-gradient(90deg, #8582fb, #b388ff)";
    el.questionCard.style.opacity = "0";
    el.questionCard.style.transform = "scale(0.9)";
    el.questionCard.style.transition = "none";
    el.startOverlay.classList.remove("active");

    if (!audio) initAudio();
    audio.currentTime = 0;
    audio.play().then(function () {
      isPlaying = true;
      waitForQ(0);
      if (animId) cancelAnimationFrame(animId);
      loop();
    }).catch(function () {
      alert("\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\n" + AUDIO_SRC + " \u304C\u914D\u7F6E\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      el.startOverlay.classList.add("active");
    });
  }

  function checkEnd() {
    if (!isPlaying) return;
    var t = getAudioTime();
    var dur = 0;
    try { dur = audio.duration; } catch (e) {}
    if (dur > 0 && t >= dur - 0.3) { endGame(); }
    else { setTimeout(checkEnd, 100); }
  }

  function endGame() {
    isPlaying = false;
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    qActive = false;
    try { audio.pause(); } catch (e) {}
    showResult();
  }

  // ============================================
  // リザルト
  // ============================================
  function calcRank(acc) {
    if (acc >= 95) return { rank: "SS", color: "#fbbf24" };
    if (acc >= 85) return { rank: "S", color: "#8582fb" };
    if (acc >= 70) return { rank: "A", color: "#dbbee1" };
    if (acc >= 55) return { rank: "B", color: "#b794d4" };
    if (acc >= 40) return { rank: "C", color: "#716ed5" };
    return { rank: "D", color: "#9ca3af" };
  }

  function showResult() {
    var total = answerCount;
    var acc = total > 0 ? Math.round(correctCount / total * 100) : 0;
    var rankInfo = calcRank(acc);

    el.resultRank.textContent = rankInfo.rank;
    el.resultRank.className = "rank-badge rank-" + rankInfo.rank;
    el.finalScore.textContent = score;
    el.resultCorrect.textContent = correctCount;
    el.resultTotal.textContent = questions.length;
    el.resultAcc.textContent = acc + "%";
    el.resultMaxCombo.textContent = maxCombo;

    el.rB.textContent = diffResult[D.B].correct + "/" + diffResult[D.B].total;
    el.rI.textContent = diffResult[D.I].correct + "/" + diffResult[D.I].total;
    el.rA.textContent = diffResult[D.A].correct + "/" + diffResult[D.A].total;

    lastResult = {
      score: score, correct: correctCount, total: questions.length,
      accuracy: acc, rank: rankInfo.rank, rankColor: rankInfo.color,
      maxCombo: maxCombo,
      b: diffResult[D.B], i: diffResult[D.I], a: diffResult[D.A]
    };

    saveHistory(lastResult);
    el.resultOverlay.classList.add("active");
  }

  // ============================================
  // 履歴
  // ============================================
  function saveHistory(data) {
    try {
      var h = JSON.parse(localStorage.getItem("milliGames_history") || "[]");
      h.unshift({
        game: "\u3069\u3063\u3061\u30AF\u30A4\u30BA",
        date: new Date().toISOString(),
        score: data.score, accuracy: data.accuracy,
        rank: data.rank, maxCombo: data.maxCombo
      });
      if (h.length > 50) h = h.slice(0, 50);
      localStorage.setItem("milliGames_history", JSON.stringify(h));
    } catch (e) {}
  }

  // ============================================
  // リトライ
  // ============================================
  function retry() {
    el.resultOverlay.classList.remove("active");
    el.startOverlay.classList.add("active");
    if (audio) { try { audio.pause(); } catch (e) {} audio.currentTime = 0; }
  }

  // ============================================
  // 共有
  // ============================================
  function getXText() {
    if (!lastResult) return "";
    return "\uD83E\uDD14 \u3069\u3063\u3061\u30AF\u30A4\u30BA \u3092\u30D7\u30EC\u30A4\uFF01\n" +
      "\u30B9\u30B3\u30A2: " + lastResult.score + "\n" +
      "\u6B63\u89E3\u7387: " + lastResult.accuracy + "%\n" +
      "\u30E9\u30F3\u30AF: " + lastResult.rank + "\n" +
      "\u6700\u5927\u30B3\u30F3\u30DC: " + lastResult.maxCombo + "\n" +
      "#\u3069\u3063\u3061\u30AF\u30A4\u30BA #\u30DF\u30EA\u30D7\u30ED #MilliGames\n" +
      "https://milli-games.onrender.com/games/dotchi.html";
  }

  function loadImage(src) {
    return new Promise(function (r) {
      var img = new Image();
      img.onload = function () { r(img); };
      img.onerror = function () { r(null); };
      img.src = src;
    });
  }

  function generateShareImage() {
    if (!lastResult) return Promise.reject();
    var r = lastResult;
    var W = 420, H = 520, s = 2;
    var c = el.shareCanvas;
    c.width = W * s; c.height = H * s;
    var ctx = c.getContext("2d");
    ctx.scale(s, s);

    return loadImage("../images/rogo.png").then(function (rogoImg) {
      // background
      var g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#f5e6ff"); g.addColorStop(1, "#e8d4f0");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      // gold border
      ctx.shadowColor = "rgba(212,175,55,0.4)"; ctx.shadowBlur = 20;
      ctx.strokeStyle = "#d4af37"; ctx.lineWidth = 3;
      ctx.strokeRect(6, 6, W - 12, H - 12);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(212,175,55,0.25)"; ctx.lineWidth = 1;
      ctx.strokeRect(11, 11, W - 22, H - 22);

      // ===== LEFT: logo panel =====
      var logoX = 20, logoY = 60, logoSize = 130;
      // light square background
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.beginPath();
      roundRect(ctx, logoX, logoY, logoSize, logoSize, 16);
      ctx.fill();

      if (rogoImg && rogoImg.width > 0) {
        var rw = logoSize - 16;
        var rh = rw * rogoImg.height / rogoImg.width;
        var rx = logoX + (logoSize - rw) / 2;
        var ry = logoY + (logoSize - rh) / 2;
        // clip to rounded rect
        ctx.save();
        ctx.beginPath();
        roundRect(ctx, logoX + 8, logoY + 8, logoSize - 16, logoSize - 16, 12);
        ctx.clip();
        ctx.drawImage(rogoImg, rx, ry, rw, rh);
        ctx.restore();
      }

      // label below logo
      ctx.fillStyle = "rgba(45,27,78,0.45)";
      ctx.font = "11px -apple-system, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText("Milli Games", logoX + logoSize / 2, logoY + logoSize + 8);

      // ===== RIGHT: result content =====
      var cx = logoX + logoSize + 16;
      var rightW = W - cx - 16;

      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillStyle = "#4a2860";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText("\u3069\u3063\u3061\u30AF\u30A4\u30BA", cx + rightW / 2, 20);

      // rank
      var rs = 64, rCY = 48;
      ctx.shadowColor = r.rankColor; ctx.shadowBlur = 24;
      ctx.beginPath(); ctx.arc(cx + rightW / 2, rCY + rs / 2, rs / 2, 0, Math.PI * 2);
      ctx.fillStyle = r.rankColor + "18"; ctx.fill();
      ctx.strokeStyle = r.rankColor; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = r.rankColor;
      ctx.font = "bold 32px -apple-system, sans-serif";
      ctx.textBaseline = "middle";
      ctx.fillText(r.rank, cx + rightW / 2, rCY + rs / 2);

      // score
      var y = rCY + rs + 6;
      ctx.textBaseline = "top";
      ctx.fillStyle = "#8582fb"; ctx.font = "bold 24px -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(r.score.toLocaleString(), cx + rightW / 2, y);
      ctx.fillStyle = "rgba(45,27,78,0.3)"; ctx.font = "11px -apple-system, sans-serif";
      ctx.fillText("SCORE", cx + rightW / 2, y + 28);

      // bars
      y += 46;
      var bars = [
        { label: "ACCURACY", val: r.accuracy, suf: "%", color: "#8582fb" },
        { label: "MAX COMBO", val: r.maxCombo, suf: "", color: "#dbbee1" }
      ];
      for (var b = 0; b < bars.length; b++) {
        ctx.fillStyle = "rgba(45,27,78,0.7)"; ctx.textAlign = "left";
        ctx.font = "12px -apple-system, sans-serif";
        ctx.fillText(bars[b].label, cx, y);
        ctx.textAlign = "right";
        ctx.font = "bold 12px -apple-system, sans-serif";
        ctx.fillText(String(bars[b].val) + bars[b].suf, cx + rightW - 4, y);
        ctx.fillStyle = "rgba(45,27,78,0.12)";
        ctx.fillRect(cx, y + 16, rightW, 4);
        ctx.fillStyle = bars[b].color;
        ctx.fillRect(cx, y + 16, rightW * Math.min(bars[b].val / 100, 1), 4);
        y += 34;
      }

      // divider
      y += 2;
      ctx.strokeStyle = "rgba(45,27,78,0.1)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(cx + rightW, y); ctx.stroke();
      y += 8;

      // details
      ctx.textBaseline = "top"; ctx.fillStyle = "rgba(45,27,78,0.6)";
      ctx.font = "11px -apple-system, sans-serif"; ctx.textAlign = "center";
      ctx.fillText("DETAILS", cx + rightW / 2, y); y += 16;

      var items = [
        { label: "CORRECT", color: "#4caf50", val: r.correct },
        { label: "TOTAL", color: "rgba(45,27,78,0.3)", val: r.total }
      ];
      for (var i = 0; i < items.length; i++) {
        ctx.fillStyle = "rgba(45,27,78,0.25)"; ctx.textAlign = "left";
        ctx.font = "13px -apple-system, sans-serif";
        ctx.fillText(items[i].label, cx + 8, y);
        ctx.fillStyle = items[i].color; ctx.textAlign = "right";
        ctx.fillText(String(items[i].val), cx + rightW - 8, y);
        y += 22;
      }

      return new Promise(function (r) { c.toBlob(function (b) { r(b); }, "image/png"); });
    });
  }

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function handleSave() {
    generateShareImage().then(function (blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url; a.download = "dotchi_result.png";
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    });
  }

  function handlePostX() {
    var text = getXText();
    if (navigator.share) { navigator.share({ text: text }); }
    else { window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text), "_blank"); }
  }

  // ============================================
  // 初期化
  // ============================================
  el.btnStart.addEventListener("click", startGame);
  el.btnRetry.addEventListener("click", retry);
  el.btnSave.addEventListener("click", handleSave);
  el.btnX.addEventListener("click", handlePostX);

  el.questionCard.style.opacity = "0";
  el.questionCard.style.transform = "scale(0.9)";
})();
