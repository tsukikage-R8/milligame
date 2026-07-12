/* ============================================
   ルミナス / 音ノ瀬らこ 譜面データ
   BPM: 170
   作成日: 2026-07-12

   ===== 自分で編集する方法 =====

   基本ルール:
     push(t, l, type, dur, lvl)
     t  = タイムスタンプ（秒）。曲開始からの経過秒
     l  = レーン番号（0=左端, 1, 2, 3=右端）
     type = "tap"(通常) / "hold"(長押し) / "flick"(フリック)
     dur = holdの場合の長さ（秒）。tap/flickは0
     lvl = 難易度レベル（0:全難易度 / 1:Normal〜Hard / 2:Hardのみ）

   時間の計算方法:
     1小節 = 4拍, BPM 170 → 1拍 = 60/170 ≈ 0.353秒
     beat(n) = n拍目の秒数
     bar(n)  = n小節目の先頭の秒数
     例: 8小節目の2拍目 = bar(8) + beat(2)

   ノーツ追加の流れ:
     1. 曲を聴きながら、譜面を追加したいタイミングの秒数を計測
     2. push() を追加
     3. ブラウザでリロードして確認
     4. タイミングがずれてたら t の値を微調整

   Hardモード専用ノーツを追加する場合:
     push(bar(10) + beat(2), 0, "tap", 0, 2);  // ← 第5引数が 2

   ============================================ */
var CHARTS = CHARTS || {};

CHARTS.luminous = (function () {
  "use strict";

  var BPM = 170;
  var BEAT = 60 / BPM; // 0.35294s
  var b4 = BEAT * 4;

  var notes = [];

  function push(t, l, type, dur, lvl) {
    notes.push({ t: +t.toFixed(3), l: l, type: type || "tap", d: dur || 0, lvl: lvl || 0 });
  }

  function bar(n) { return n * b4; }
  function beat(n) { return n * BEAT; }

  // ========================================
  // INTRO (bar 0-4) 導入
  // ========================================
  push(bar(0) + beat(1), 0, "tap", 0, 0);
  push(bar(0) + beat(3), 2, "tap", 0, 0);
  push(bar(1) + beat(1), 1, "tap", 0, 0);
  push(bar(1) + beat(3), 3, "tap", 0, 0);
  push(bar(2) + beat(0), 0, "tap", 0, 0);
  push(bar(2) + beat(2), 2, "tap", 0, 0);
  push(bar(3) + beat(1), 1, "tap", 0, 0);
  push(bar(3) + beat(3), 3, "tap", 0, 0);

  // ========================================
  // BUILD-UP (bar 4-8) リズム確認
  // ========================================
  push(bar(4) + beat(0), 0, "tap", 0, 0);
  push(bar(4) + beat(2), 1, "tap", 0, 0);
  push(bar(5) + beat(0), 2, "tap", 0, 0);
  push(bar(5) + beat(2), 3, "tap", 0, 0);
  push(bar(6) + beat(0), 0, "tap", 0, 0);
  push(bar(6) + beat(1), 2, "tap", 0, 0);
  push(bar(6) + beat(2), 1, "tap", 0, 0);
  push(bar(6) + beat(3), 3, "tap", 0, 0);

  // 装飾ノーツ
  push(bar(7) + beat(0), 0, "tap", 0, 1);
  push(bar(7) + beat(0.5), 1, "tap", 0, 1);
  push(bar(7) + beat(1), 2, "tap", 0, 1);
  push(bar(7) + beat(1.5), 3, "tap", 0, 1);
  push(bar(7) + beat(2), 0, "tap", 0, 0);
  push(bar(7) + beat(3), 2, "tap", 0, 0);

  // HD追加
  push(bar(7) + beat(2.5), 1, "tap", 0, 2);
  push(bar(7) + beat(3.5), 3, "tap", 0, 2);

  // ========================================
  // VERSE (bar 8-16) Aメロ
  // ========================================
  // bar 8
  push(bar(8) + beat(0), 0, "hold", beat(2), 0);
  push(bar(8) + beat(1), 2, "tap", 0, 1);
  push(bar(8) + beat(2), 1, "tap", 0, 0);
  push(bar(8) + beat(3), 3, "tap", 0, 0);
  // bar 9
  push(bar(9) + beat(0), 2, "hold", beat(1), 0);
  push(bar(9) + beat(1), 0, "tap", 0, 0);
  push(bar(9) + beat(2), 1, "tap", 0, 1);
  push(bar(9) + beat(3), 3, "tap", 0, 1);
  // bar 10
  push(bar(10) + beat(0), 0, "tap", 0, 0);
  push(bar(10) + beat(1), 2, "tap", 0, 0);
  push(bar(10) + beat(2), 1, "hold", beat(1), 1);
  push(bar(10) + beat(3), 3, "tap", 0, 1);
  // bar 11
  push(bar(11) + beat(0), 0, "tap", 0, 0);
  push(bar(11) + beat(1), 2, "tap", 0, 0);
  push(bar(11) + beat(2), 3, "tap", 0, 1);
  push(bar(11) + beat(3), 1, "tap", 0, 1);

  // HD追加 bar 10-11
  push(bar(10) + beat(0.5), 0, "tap", 0, 2);
  push(bar(10) + beat(1.5), 2, "tap", 0, 2);
  push(bar(11) + beat(0.5), 1, "tap", 0, 2);
  push(bar(11) + beat(1.5), 3, "tap", 0, 2);

  // bar 12
  push(bar(12) + beat(0), 1, "tap", 0, 0);
  push(bar(12) + beat(1), 3, "tap", 0, 0);
  push(bar(12) + beat(2), 0, "hold", beat(1), 1);
  push(bar(12) + beat(3), 2, "tap", 0, 1);
  // bar 13
  push(bar(13) + beat(0), 1, "tap", 0, 0);
  push(bar(13) + beat(1), 3, "tap", 0, 0);
  push(bar(13) + beat(2), 0, "tap", 0, 0);
  push(bar(13) + beat(3), 2, "tap", 0, 0);
  // bar 14
  push(bar(14) + beat(0), 1, "tap", 0, 0);
  push(bar(14) + beat(1), 0, "tap", 0, 1);
  push(bar(14) + beat(2), 3, "tap", 0, 1);
  push(bar(14) + beat(3), 2, "tap", 0, 1);
  // bar 15
  push(bar(15) + beat(0), 1, "hold", beat(2), 0);
  push(bar(15) + beat(2), 3, "tap", 0, 1);
  push(bar(15) + beat(3), 0, "tap", 0, 1);

  // HD追加 bar 14-15
  push(bar(14) + beat(0.5), 0, "tap", 0, 2);
  push(bar(14) + beat(1.5), 2, "tap", 0, 2);
  push(bar(14) + beat(2.5), 1, "tap", 0, 2);
  push(bar(14) + beat(3.5), 3, "tap", 0, 2);
  push(bar(15) + beat(2.5), 0, "tap", 0, 2);

  // ========================================
  // PRE-CHORUS (bar 16-20) フリック導入
  // ========================================
  push(bar(16) + beat(0), 0, "flick", 0, 0);
  push(bar(16) + beat(1), 2, "tap", 0, 0);
  push(bar(16) + beat(2), 1, "flick", 0, 1);
  push(bar(16) + beat(3), 3, "tap", 0, 0);
  push(bar(17) + beat(0), 0, "tap", 0, 0);
  push(bar(17) + beat(1), 2, "tap", 0, 1);
  push(bar(17) + beat(2), 3, "flick", 0, 1);
  push(bar(17) + beat(3), 1, "tap", 0, 0);
  push(bar(18) + beat(0), 0, "hold", beat(1), 1);
  push(bar(18) + beat(1), 2, "tap", 0, 1);
  push(bar(18) + beat(2), 1, "tap", 0, 0);
  push(bar(18) + beat(3), 3, "flick", 0, 1);
  push(bar(19) + beat(0), 0, "tap", 0, 0);
  push(bar(19) + beat(1), 2, "flick", 0, 1);
  push(bar(19) + beat(2), 1, "hold", beat(1), 1);
  push(bar(19) + beat(3), 3, "tap", 0, 0);

  // HD: 16分パターン
  push(bar(16) + beat(0.5), 1, "tap", 0, 2);
  push(bar(16) + beat(1.5), 3, "tap", 0, 2);
  push(bar(17) + beat(0.5), 2, "tap", 0, 2);
  push(bar(17) + beat(1.5), 0, "tap", 0, 2);
  push(bar(19) + beat(0.5), 1, "tap", 0, 2);
  push(bar(19) + beat(1.5), 3, "tap", 0, 2);

  // ========================================
  // CHORUS (bar 20-28) サビ 高密度
  // ========================================
  // bar 20
  push(bar(20) + beat(0), 0, "tap", 0, 0);
  push(bar(20) + beat(0.5), 2, "hold", beat(0.5), 1);
  push(bar(20) + beat(1), 1, "tap", 0, 0);
  push(bar(20) + beat(1.5), 3, "tap", 0, 1);
  push(bar(20) + beat(2), 0, "flick", 0, 1);
  push(bar(20) + beat(3), 2, "tap", 0, 0);
  // bar 21
  push(bar(21) + beat(0), 1, "tap", 0, 0);
  push(bar(21) + beat(0.5), 3, "tap", 0, 1);
  push(bar(21) + beat(1), 0, "hold", beat(1), 1);
  push(bar(21) + beat(2), 2, "tap", 0, 0);
  push(bar(21) + beat(3), 1, "flick", 0, 1);
  // bar 22
  push(bar(22) + beat(0), 3, "tap", 0, 0);
  push(bar(22) + beat(0.5), 0, "tap", 0, 1);
  push(bar(22) + beat(1), 2, "hold", beat(0.5), 1);
  push(bar(22) + beat(1.5), 1, "tap", 0, 1);
  push(bar(22) + beat(2), 3, "flick", 0, 1);
  push(bar(22) + beat(3), 0, "tap", 0, 0);
  // bar 23
  push(bar(23) + beat(0), 1, "hold", beat(2), 0);
  push(bar(23) + beat(1), 3, "tap", 0, 1);
  push(bar(23) + beat(2), 0, "tap", 0, 0);
  push(bar(23) + beat(3), 2, "flick", 0, 1);

  // HD: 密度追加 bar 20-23
  push(bar(20) + beat(0.75), 0, "tap", 0, 2);
  push(bar(20) + beat(2.5), 1, "tap", 0, 2);
  push(bar(21) + beat(0.75), 2, "tap", 0, 2);
  push(bar(21) + beat(2.5), 3, "tap", 0, 2);
  push(bar(22) + beat(0.75), 1, "tap", 0, 2);
  push(bar(22) + beat(2.5), 0, "tap", 0, 2);
  push(bar(23) + beat(0.5), 2, "tap", 0, 2);
  push(bar(23) + beat(1.5), 1, "tap", 0, 2);
  push(bar(23) + beat(2.5), 3, "tap", 0, 2);

  // bar 24 (repeat pattern)
  push(bar(24) + beat(0), 0, "tap", 0, 0);
  push(bar(24) + beat(0.5), 2, "hold", beat(0.5), 1);
  push(bar(24) + beat(1), 1, "flick", 0, 0);
  push(bar(24) + beat(1.5), 3, "tap", 0, 1);
  push(bar(24) + beat(2), 0, "tap", 0, 0);
  push(bar(24) + beat(3), 2, "flick", 0, 1);
  // bar 25
  push(bar(25) + beat(0), 1, "tap", 0, 0);
  push(bar(25) + beat(0.5), 3, "tap", 0, 1);
  push(bar(25) + beat(1), 0, "hold", beat(1), 0);
  push(bar(25) + beat(2), 2, "flick", 0, 1);
  push(bar(25) + beat(3), 1, "tap", 0, 0);
  // bar 26
  push(bar(26) + beat(0), 3, "tap", 0, 0);
  push(bar(26) + beat(0.5), 0, "tap", 0, 1);
  push(bar(26) + beat(1), 2, "hold", beat(0.5), 1);
  push(bar(26) + beat(1.5), 1, "flick", 0, 1);
  push(bar(26) + beat(2), 3, "tap", 0, 0);
  push(bar(26) + beat(3), 0, "tap", 0, 0);
  // bar 27
  push(bar(27) + beat(0), 1, "hold", beat(2), 0);
  push(bar(27) + beat(1), 3, "flick", 0, 1);
  push(bar(27) + beat(2), 2, "tap", 0, 0);
  push(bar(27) + beat(3), 0, "tap", 0, 1);

  // HD: 16分追加 bar 24-27
  push(bar(24) + beat(0.75), 1, "tap", 0, 2);
  push(bar(24) + beat(2.5), 3, "tap", 0, 2);
  push(bar(25) + beat(0.75), 2, "tap", 0, 2);
  push(bar(25) + beat(2.5), 0, "tap", 0, 2);
  push(bar(26) + beat(0.75), 1, "tap", 0, 2);
  push(bar(26) + beat(2.5), 2, "tap", 0, 2);
  push(bar(27) + beat(2.5), 3, "tap", 0, 2);

  // ========================================
  // BRIDGE (bar 28-32) 一息
  // ========================================
  push(bar(28) + beat(0), 0, "hold", beat(2), 0);
  push(bar(28) + beat(1), 2, "tap", 0, 1);
  push(bar(28) + beat(2), 1, "tap", 0, 0);
  push(bar(28) + beat(3), 3, "tap", 0, 1);
  push(bar(29) + beat(0), 2, "hold", beat(2), 0);
  push(bar(29) + beat(1), 0, "tap", 0, 1);
  push(bar(29) + beat(2), 3, "tap", 0, 0);
  push(bar(29) + beat(3), 1, "tap", 0, 1);
  // bar 30-31 still
  push(bar(30) + beat(0), 0, "tap", 0, 0);
  push(bar(30) + beat(1), 2, "tap", 0, 0);
  push(bar(30) + beat(2), 1, "tap", 0, 0);
  push(bar(30) + beat(3), 3, "tap", 0, 0);
  push(bar(31) + beat(0), 0, "hold", beat(3), 0);
  push(bar(31) + beat(2), 2, "tap", 0, 1);

  // HD
  push(bar(28) + beat(1.5), 0, "tap", 0, 2);
  push(bar(29) + beat(1.5), 3, "tap", 0, 2);
  push(bar(30) + beat(0.5), 1, "tap", 0, 2);
  push(bar(30) + beat(1.5), 3, "tap", 0, 2);
  push(bar(30) + beat(2.5), 0, "tap", 0, 2);

  // ========================================
  // FINAL CHORUS (bar 32-40) ラスサビ 最高密度
  // ========================================
  // bar 32 (same as bar 20)
  push(bar(32) + beat(0), 0, "tap", 0, 0);
  push(bar(32) + beat(0.5), 2, "hold", beat(0.5), 0);
  push(bar(32) + beat(1), 1, "flick", 0, 0);
  push(bar(32) + beat(1.5), 3, "tap", 0, 1);
  push(bar(32) + beat(2), 0, "tap", 0, 0);
  push(bar(32) + beat(3), 2, "flick", 0, 1);
  // bar 33
  push(bar(33) + beat(0), 1, "tap", 0, 0);
  push(bar(33) + beat(0.5), 3, "tap", 0, 0);
  push(bar(33) + beat(1), 0, "hold", beat(1), 0);
  push(bar(33) + beat(2), 2, "flick", 0, 1);
  push(bar(33) + beat(3), 1, "tap", 0, 1);
  // bar 34
  push(bar(34) + beat(0), 3, "tap", 0, 0);
  push(bar(34) + beat(0.5), 0, "tap", 0, 1);
  push(bar(34) + beat(1), 2, "hold", beat(0.5), 1);
  push(bar(34) + beat(1.5), 1, "flick", 0, 1);
  push(bar(34) + beat(2), 3, "tap", 0, 0);
  push(bar(34) + beat(3), 0, "tap", 0, 0);
  // bar 35
  push(bar(35) + beat(0), 1, "hold", beat(2), 0);
  push(bar(35) + beat(1), 3, "flick", 0, 1);
  push(bar(35) + beat(2), 2, "tap", 0, 0);
  push(bar(35) + beat(3), 0, "flick", 0, 1);

  // bar 36
  push(bar(36) + beat(0), 1, "tap", 0, 0);
  push(bar(36) + beat(0.5), 3, "tap", 0, 1);
  push(bar(36) + beat(1), 0, "tap", 0, 0);
  push(bar(36) + beat(1.5), 2, "tap", 0, 1);
  push(bar(36) + beat(2), 1, "flick", 0, 1);
  push(bar(36) + beat(3), 3, "hold", beat(1), 1);
  // bar 37
  push(bar(37) + beat(0), 0, "tap", 0, 0);
  push(bar(37) + beat(0.5), 2, "tap", 0, 1);
  push(bar(37) + beat(1), 1, "hold", beat(0.5), 1);
  push(bar(37) + beat(1.5), 3, "flick", 0, 1);
  push(bar(37) + beat(2), 0, "tap", 0, 0);
  push(bar(37) + beat(3), 2, "tap", 0, 0);
  // bar 38
  push(bar(38) + beat(0), 1, "tap", 0, 0);
  push(bar(38) + beat(1), 3, "tap", 0, 1);
  push(bar(38) + beat(2), 0, "hold", beat(1), 0);
  push(bar(38) + beat(3), 2, "flick", 0, 1);
  // bar 39
  push(bar(39) + beat(0), 1, "hold", beat(3), 0);
  push(bar(39) + beat(1), 3, "tap", 0, 1);
  push(bar(39) + beat(2), 2, "tap", 0, 1);

  // HD: 16分ラッシュ bar 32-39
  push(bar(32) + beat(0.75), 0, "tap", 0, 2);
  push(bar(32) + beat(2.5), 1, "tap", 0, 2);
  push(bar(33) + beat(0.75), 2, "tap", 0, 2);
  push(bar(33) + beat(2.5), 3, "tap", 0, 2);
  push(bar(34) + beat(0.75), 1, "tap", 0, 2);
  push(bar(34) + beat(2.5), 2, "tap", 0, 2);
  push(bar(35) + beat(0.5), 0, "tap", 0, 2);
  push(bar(35) + beat(1.5), 1, "tap", 0, 2);
  push(bar(35) + beat(2.5), 3, "tap", 0, 2);
  push(bar(36) + beat(2.5), 0, "tap", 0, 2);
  push(bar(37) + beat(2.5), 1, "tap", 0, 2);
  push(bar(38) + beat(0.5), 2, "tap", 0, 2);
  push(bar(38) + beat(1.5), 0, "tap", 0, 2);
  push(bar(38) + beat(2.5), 1, "tap", 0, 2);
  push(bar(39) + beat(0.5), 0, "tap", 0, 2);
  push(bar(39) + beat(1.5), 2, "tap", 0, 2);
  push(bar(39) + beat(2.5), 3, "tap", 0, 2);

  // ========================================
  // OUTRO (bar 40-44) フィニッシュ
  // ========================================
  push(bar(40) + beat(0), 0, "tap", 0, 0);
  push(bar(40) + beat(1), 2, "tap", 0, 0);
  push(bar(40) + beat(2), 1, "tap", 0, 0);
  push(bar(40) + beat(3), 3, "tap", 0, 0);
  push(bar(41) + beat(0), 0, "tap", 0, 0);
  push(bar(41) + beat(1), 2, "tap", 0, 0);
  push(bar(41) + beat(2), 1, "tap", 0, 1);
  push(bar(41) + beat(3), 3, "tap", 0, 1);
  push(bar(42) + beat(0), 0, "hold", beat(1), 0);
  push(bar(42) + beat(1), 2, "tap", 0, 0);
  push(bar(42) + beat(2), 1, "tap", 0, 0);
  push(bar(42) + beat(3), 3, "tap", 0, 1);
  push(bar(43) + beat(0), 0, "hold", beat(3), 0);
  push(bar(43) + beat(2), 2, "tap", 0, 1);

  // HD
  push(bar(40) + beat(0.5), 1, "tap", 0, 2);
  push(bar(40) + beat(1.5), 3, "tap", 0, 2);
  push(bar(40) + beat(2.5), 0, "tap", 0, 2);
  push(bar(41) + beat(0.5), 1, "tap", 0, 2);
  push(bar(41) + beat(1.5), 3, "tap", 0, 2);
  push(bar(41) + beat(2.5), 0, "tap", 0, 2);
  push(bar(42) + beat(0.5), 1, "tap", 0, 2);
  push(bar(42) + beat(1.5), 2, "tap", 0, 2);
  push(bar(42) + beat(2.5), 3, "tap", 0, 2);

  notes.sort(function (a, b) { return a.t - b.t; });

  return {
    videoId: "MklYo2c3QmM",
    title: "ルミナス",
    bpm: BPM,
    offset: 0,
    duration: 120,
    notes: notes
  };

  /*
    ===== 自分でノーツを編集する方法 =====

    ■ ノーツの追加
      例）10小節目の2拍目にレーン1にtapノーツを追加
        push(bar(10) + beat(2), 1, "tap", 0, 0);

    ■ ノーツの種類
      "tap"  : 通常ノーツ（シングルタップ）
      "hold" : 長押しノーツ（durに長さを秒で指定）
      "flick": フリックノーツ（矢印付き）

    ■ 難易度レベル
      第5引数 lvl:
        0 → Easy / Normal / Hard すべてに出る
        1 → Normal / Hard のみ
        2 → Hard のみ

    ■ タイミングの調整
      ノーツが曲より早い → t の値を大きくする（+0.05 ずつ試す）
      ノーツが曲より遅い → t の値を小さくする（-0.05 ずつ試す）

    ■ 譜面の構造
      bar(n) = n小節目の先頭
      beat(n) = 小節内のn拍目（0始まり, 0〜3）
      beat(1.5) で裏拍にも配置可能
  */
})();
