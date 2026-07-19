/* ============================================
   Princess Viral / 音ノ乃のの 譜面データ
   BPM: 134
   調整方法はファイル末尾を参照
   ============================================ */
var CHARTS = CHARTS || {};

CHARTS.princess_viral = (function () {
  "use strict";

  var BPM = 134;
  var BEAT = 60 / BPM; // ~0.4478s
  var b4 = BEAT * 4; // 小節

  var notes = [];

  function push(t, l, type, dur, lvl) {
    var note = { t: +t.toFixed(3), l: l, type: type || "tap", d: dur || 0 };
    if (lvl !== undefined) note.lvl = lvl;
    notes.push(note);
  }

  function bar(n) { return n * b4; }
  function beat(n) { return n * BEAT; }

  // ========================================
  // INTRO (bar 0-2) 無音
  // ========================================

  // ========================================
  // BUILD-UP (bar 2-6) 単音でリズム確認
  // ========================================
  // bar 2
  push(bar(2) + beat(1), 0, "tap");
  push(bar(2) + beat(3), 2, "tap");
  // bar 3
  push(bar(3) + beat(1), 1, "tap");
  push(bar(3) + beat(3), 3, "tap");
  // bar 4
  push(bar(4) + beat(0), 0, "tap");
  push(bar(4) + beat(2), 2, "tap");
  push(bar(4) + beat(3), 1, "tap");
  // bar 5
  push(bar(5) + beat(1), 3, "tap");
  push(bar(5) + beat(2), 0, "tap");
  push(bar(5) + beat(3), 2, "tap");

  // ========================================
  // VERSE A (bar 6-14) 密度中程度、ホールド導入
  // ========================================
  // bar 6
  push(bar(6) + beat(0), 0, "hold", beat(2));
  push(bar(6) + beat(2), 2, "tap");
  push(bar(6) + beat(3), 1, "tap");
  // bar 7
  push(bar(7) + beat(0), 3, "hold", beat(1));
  push(bar(7) + beat(1), 1, "tap");
  push(bar(7) + beat(2), 0, "tap");
  push(bar(7) + beat(3), 2, "tap");
  // bar 8
  push(bar(8) + beat(0), 1, "tap");
  push(bar(8) + beat(1), 3, "tap");
  push(bar(8) + beat(2), 0, "hold", beat(1));
  push(bar(8) + beat(3), 2, "tap");
  // bar 9
  push(bar(9) + beat(0), 1, "tap");
  push(bar(9) + beat(1), 3, "tap");
  push(bar(9) + beat(2), 0, "tap");
  push(bar(9) + beat(3), 2, "tap");
  // bar 10
  push(bar(10) + beat(0), 1, "tap");
  push(bar(10) + beat(2), 3, "hold", beat(2));
  push(bar(10) + beat(3), 0, "tap");
  // bar 11
  push(bar(11) + beat(0), 2, "tap");
  push(bar(11) + beat(1), 0, "tap");
  push(bar(11) + beat(2), 3, "tap");
  push(bar(11) + beat(3), 1, "tap");
  // bar 12
  push(bar(12) + beat(0), 2, "hold", beat(1));
  push(bar(12) + beat(1), 0, "tap");
  push(bar(12) + beat(2), 3, "tap");
  push(bar(12) + beat(3), 1, "tap");
  // bar 13
  push(bar(13) + beat(0), 0, "tap");
  push(bar(13) + beat(1), 2, "tap");
  push(bar(13) + beat(2), 1, "tap");
  push(bar(13) + beat(3), 3, "tap");
  // bar 14
  push(bar(14) + beat(0), 0, "hold", beat(3));
  push(bar(14) + beat(2), 2, "tap");
  push(bar(14) + beat(3), 1, "tap");

  // ========================================
  // PRE-CHORUS (bar 14-18) 密度上昇、フリック導入
  // ========================================
  // bar 15
  push(bar(15) + beat(0), 3, "tap");
  push(bar(15) + beat(1), 1, "tap");
  push(bar(15) + beat(2), 0, "tap");
  push(bar(15) + beat(3), 2, "tap");
  // bar 16
  push(bar(16) + beat(0), 1, "hold", beat(1));
  push(bar(16) + beat(1), 3, "tap");
  push(bar(16) + beat(2), 0, "tap");
  push(bar(16) + beat(3), 2, "tap");
  // bar 17
  push(bar(17) + beat(0), 0, "tap");
  push(bar(17) + beat(0.5), 1, "tap");
  push(bar(17) + beat(1), 2, "tap");
  push(bar(17) + beat(1.5), 3, "tap");
  push(bar(17) + beat(2), 0, "tap");
  push(bar(17) + beat(3), 2, "hold", beat(1));
  // bar 18
  push(bar(18) + beat(0), 1, "tap");
  push(bar(18) + beat(1), 3, "tap");
  push(bar(18) + beat(2), 0, "tap");
  push(bar(18) + beat(3), 2, "tap");

  // ========================================
  // CHORUS A (bar 18-26) 高密度、全ノーツ種
  // ========================================
  // bar 19
  push(bar(19) + beat(0), 0, "tap");
  push(bar(19) + beat(0.5), 2, "hold", beat(0.5));
  push(bar(19) + beat(1), 1, "tap");
  push(bar(19) + beat(1.5), 3, "tap");
  push(bar(19) + beat(2), 0, "tap");
  push(bar(19) + beat(3), 2, "tap");
  // bar 20
  push(bar(20) + beat(0), 1, "tap");
  push(bar(20) + beat(0.5), 3, "tap");
  push(bar(20) + beat(1), 0, "hold", beat(1));
  push(bar(20) + beat(2), 2, "tap");
  push(bar(20) + beat(3), 1, "tap");
  // bar 21
  push(bar(21) + beat(0), 3, "tap");
  push(bar(21) + beat(0.5), 0, "tap");
  push(bar(21) + beat(1), 2, "hold", beat(0.5));
  push(bar(21) + beat(1.5), 1, "tap");
  push(bar(21) + beat(2), 3, "tap");
  push(bar(21) + beat(3), 0, "tap");
  // bar 22
  push(bar(22) + beat(0), 1, "hold", beat(2));
  push(bar(22) + beat(1), 3, "tap");
  push(bar(22) + beat(2), 0, "tap");
  push(bar(22) + beat(3), 2, "tap");
  // bar 23
  push(bar(23) + beat(0), 1, "tap");
  push(bar(23) + beat(0.5), 3, "tap");
  push(bar(23) + beat(1), 0, "tap");
  push(bar(23) + beat(1.5), 2, "tap");
  push(bar(23) + beat(2), 1, "tap");
  push(bar(23) + beat(3), 3, "hold", beat(1));
  // bar 24
  push(bar(24) + beat(0), 0, "tap");
  push(bar(24) + beat(0.5), 2, "tap");
  push(bar(24) + beat(1), 1, "hold", beat(0.5));
  push(bar(24) + beat(1.5), 3, "tap");
  push(bar(24) + beat(2), 0, "tap");
  push(bar(24) + beat(3), 2, "tap");
  // bar 25
  push(bar(25) + beat(0), 1, "tap");
  push(bar(25) + beat(1), 3, "tap");
  push(bar(25) + beat(2), 0, "hold", beat(1));
  push(bar(25) + beat(3), 2, "tap");

  // ========================================
  // BRIDGE (bar 26-30) 低密度、長ホールド
  // ========================================
  // bar 26–27
  push(bar(26) + beat(0), 0, "hold", beat(6));
  push(bar(26) + beat(2), 2, "tap");
  push(bar(26) + beat(3), 3, "tap");
  // bar 27
  push(bar(27) + beat(1), 1, "tap");
  push(bar(27) + beat(3), 3, "tap");
  // bar 28–29
  push(bar(28) + beat(0), 2, "hold", beat(6));
  push(bar(28) + beat(2), 0, "tap");
  push(bar(28) + beat(3), 1, "tap");
  // bar 29
  push(bar(29) + beat(1), 3, "tap");
  push(bar(29) + beat(3), 0, "tap");

  // ========================================
  // CHORUS B (bar 30-38) 最高密度、クライマックス
  // ========================================
  // bar 30 (same as bar 19)
  push(bar(30) + beat(0), 0, "tap");
  push(bar(30) + beat(0.5), 2, "hold", beat(0.5));
  push(bar(30) + beat(1), 1, "tap");
  push(bar(30) + beat(1.5), 3, "tap");
  push(bar(30) + beat(2), 0, "tap");
  push(bar(30) + beat(3), 2, "tap");
  // bar 31
  push(bar(31) + beat(0), 1, "tap");
  push(bar(31) + beat(0.5), 3, "tap");
  push(bar(31) + beat(1), 0, "hold", beat(1));
  push(bar(31) + beat(2), 2, "tap");
  push(bar(31) + beat(3), 1, "tap");
  // bar 32
  push(bar(32) + beat(0), 3, "tap");
  push(bar(32) + beat(0.5), 0, "tap");
  push(bar(32) + beat(1), 2, "hold", beat(0.5));
  push(bar(32) + beat(1.5), 1, "tap");
  push(bar(32) + beat(2), 3, "tap");
  push(bar(32) + beat(3), 0, "tap");
  // bar 33
  push(bar(33) + beat(0), 1, "hold", beat(2));
  push(bar(33) + beat(1), 3, "tap");
  push(bar(33) + beat(2), 0, "tap");
  push(bar(33) + beat(3), 2, "tap");
  // bar 34
  push(bar(34) + beat(0), 0, "tap");
  push(bar(34) + beat(0.5), 2, "tap");
  push(bar(34) + beat(1), 1, "tap");
  push(bar(34) + beat(1.5), 3, "tap");
  push(bar(34) + beat(2), 0, "tap");
  push(bar(34) + beat(2.5), 2, "tap");
  push(bar(34) + beat(3), 1, "tap");
  push(bar(34) + beat(3.5), 3, "tap");
  // bar 35
  push(bar(35) + beat(0), 0, "hold", beat(1));
  push(bar(35) + beat(1), 2, "tap");
  push(bar(35) + beat(2), 1, "hold", beat(1));
  push(bar(35) + beat(3), 3, "tap");
  // bar 36
  push(bar(36) + beat(0), 0, "tap");
  push(bar(36) + beat(0.5), 2, "tap");
  push(bar(36) + beat(1), 1, "tap");
  push(bar(36) + beat(1.5), 3, "tap");
  push(bar(36) + beat(2), 0, "hold", beat(0.5));
  push(bar(36) + beat(2.5), 2, "tap");
  push(bar(36) + beat(3), 1, "tap");
  push(bar(36) + beat(3.5), 3, "tap");
  // bar 37
  push(bar(37) + beat(0), 0, "hold", beat(2));
  push(bar(37) + beat(1), 2, "tap");
  push(bar(37) + beat(2), 1, "tap");
  push(bar(37) + beat(3), 3, "tap");

  // ========================================
  // OUTRO (bar 38-40)
  // ========================================
  // bar 38
  push(bar(38) + beat(0), 0, "tap");
  push(bar(38) + beat(1), 2, "tap");
  push(bar(38) + beat(2), 1, "tap");
  push(bar(38) + beat(3), 3, "tap");
  // bar 39
  push(bar(39) + beat(0), 0, "hold", beat(3));
  push(bar(39) + beat(2), 2, "tap");
  push(bar(39) + beat(3), 1, "tap");

  // ========================================
  // CHORUS C (bar 40-47) 変化サビ
  // ========================================
  // bar 40
  push(bar(40) + beat(0), 0, "tap");
  push(bar(40) + beat(0.5), 2, "tap");
  push(bar(40) + beat(1), 1, "tap");
  push(bar(40) + beat(1.5), 3, "tap");
  push(bar(40) + beat(2), 0, "hold", beat(0.5));
  push(bar(40) + beat(2.5), 2, "tap");
  push(bar(40) + beat(3), 1, "tap");
  push(bar(40) + beat(3.5), 3, "tap");
  // bar 41
  push(bar(41) + beat(0), 0, "tap");
  push(bar(41) + beat(1), 2, "hold", beat(1));
  push(bar(41) + beat(2), 1, "tap");
  push(bar(41) + beat(3), 3, "tap");
  // bar 42
  push(bar(42) + beat(0), 2, "tap");
  push(bar(42) + beat(0.5), 0, "tap");
  push(bar(42) + beat(1), 3, "hold", beat(0.5));
  push(bar(42) + beat(1.5), 1, "tap");
  push(bar(42) + beat(2), 2, "tap");
  push(bar(42) + beat(3), 0, "tap");
  // bar 43
  push(bar(43) + beat(0), 1, "hold", beat(2));
  push(bar(43) + beat(1), 3, "tap");
  push(bar(43) + beat(2), 2, "tap");
  push(bar(43) + beat(3), 0, "tap");
  // bar 44
  push(bar(44) + beat(0), 1, "tap");
  push(bar(44) + beat(0.5), 3, "tap");
  push(bar(44) + beat(1), 0, "tap");
  push(bar(44) + beat(1.5), 2, "tap");
  push(bar(44) + beat(2), 1, "tap");
  push(bar(44) + beat(3), 3, "hold", beat(1));
  // bar 45
  push(bar(45) + beat(0), 0, "tap");
  push(bar(45) + beat(0.5), 2, "tap");
  push(bar(45) + beat(1), 1, "hold", beat(0.5));
  push(bar(45) + beat(1.5), 3, "tap");
  push(bar(45) + beat(2), 0, "tap");
  push(bar(45) + beat(3), 2, "tap");
  // bar 46
  push(bar(46) + beat(0), 1, "tap");
  push(bar(46) + beat(1), 3, "tap");
  push(bar(46) + beat(2), 0, "hold", beat(1));
  push(bar(46) + beat(3), 2, "tap");
  // bar 47
  push(bar(47) + beat(0), 1, "hold", beat(3));
  push(bar(47) + beat(2), 3, "tap");
  push(bar(47) + beat(3), 2, "tap");

  // ========================================
  // BREAK (bar 48-51) 一息
  // ========================================
  // bar 48
  push(bar(48) + beat(0), 0, "hold", beat(2));
  push(bar(48) + beat(1), 2, "tap");
  push(bar(48) + beat(3), 1, "tap");
  // bar 49
  push(bar(49) + beat(0), 3, "hold", beat(2));
  push(bar(49) + beat(1), 1, "tap");
  push(bar(49) + beat(3), 0, "tap");
  // bar 50
  push(bar(50) + beat(0), 2, "tap");
  push(bar(50) + beat(1), 0, "tap");
  push(bar(50) + beat(2), 3, "tap");
  push(bar(50) + beat(3), 1, "tap");
  // bar 51
  push(bar(51) + beat(0), 2, "hold", beat(3));
  push(bar(51) + beat(2), 0, "tap");
  push(bar(51) + beat(3), 3, "tap");

  // ========================================
  // FINAL CHORUS (bar 52-59) ラスサビ
  // ========================================
  // bar 52
  push(bar(52) + beat(0), 0, "tap");
  push(bar(52) + beat(0.5), 2, "hold", beat(0.5));
  push(bar(52) + beat(1), 1, "tap");
  push(bar(52) + beat(1.5), 3, "tap");
  push(bar(52) + beat(2), 0, "tap");
  push(bar(52) + beat(3), 2, "tap");
  // bar 53
  push(bar(53) + beat(0), 1, "tap");
  push(bar(53) + beat(0.5), 3, "tap");
  push(bar(53) + beat(1), 0, "hold", beat(1));
  push(bar(53) + beat(2), 2, "tap");
  push(bar(53) + beat(3), 1, "tap");
  // bar 54
  push(bar(54) + beat(0), 3, "tap");
  push(bar(54) + beat(0.5), 0, "tap");
  push(bar(54) + beat(1), 2, "hold", beat(0.5));
  push(bar(54) + beat(1.5), 1, "tap");
  push(bar(54) + beat(2), 3, "tap");
  push(bar(54) + beat(3), 0, "tap");
  // bar 55
  push(bar(55) + beat(0), 1, "hold", beat(2));
  push(bar(55) + beat(1), 3, "tap");
  push(bar(55) + beat(2), 2, "tap");
  push(bar(55) + beat(3), 0, "tap");
  // bar 56
  push(bar(56) + beat(0), 1, "tap");
  push(bar(56) + beat(0.5), 3, "tap");
  push(bar(56) + beat(1), 0, "tap");
  push(bar(56) + beat(1.5), 2, "tap");
  push(bar(56) + beat(2), 1, "hold", beat(0.5));
  push(bar(56) + beat(2.5), 3, "tap");
  push(bar(56) + beat(3), 0, "tap");
  push(bar(56) + beat(3.5), 2, "tap");
  // bar 57
  push(bar(57) + beat(0), 1, "hold", beat(1));
  push(bar(57) + beat(1), 3, "tap");
  push(bar(57) + beat(2), 2, "hold", beat(1));
  push(bar(57) + beat(3), 0, "tap");
  // bar 58
  push(bar(58) + beat(0), 1, "tap");
  push(bar(58) + beat(0.5), 3, "tap");
  push(bar(58) + beat(1), 0, "hold", beat(0.5));
  push(bar(58) + beat(1.5), 2, "tap");
  push(bar(58) + beat(2), 1, "tap");
  push(bar(58) + beat(3), 3, "tap");
  // bar 59
  push(bar(59) + beat(0), 0, "hold", beat(3));
  push(bar(59) + beat(1), 2, "tap");
  push(bar(59) + beat(2), 1, "tap");
  push(bar(59) + beat(3), 3, "tap");

  // ========================================
  // HARDモード追加ノーツ（lvl: 2）
  // ========================================
  // Chorus A 密度追加
  push(bar(19) + beat(0.75), 1, "tap", 0, 2);
  push(bar(19) + beat(1.25), 3, "tap", 0, 2);
  push(bar(19) + beat(2.5), 0, "tap", 0, 2);
  push(bar(20) + beat(0.75), 2, "tap", 0, 2);
  push(bar(20) + beat(2.5), 1, "tap", 0, 2);
  push(bar(21) + beat(1.25), 0, "tap", 0, 2);
  push(bar(21) + beat(2.5), 3, "tap", 0, 2);
  push(bar(22) + beat(0.75), 1, "tap", 0, 2);
  push(bar(22) + beat(2.5), 0, "tap", 0, 2);
  push(bar(23) + beat(1.25), 3, "tap", 0, 2);
  // Chorus B 密度追加
  push(bar(30) + beat(0.75), 1, "tap", 0, 2);
  push(bar(30) + beat(2.5), 0, "tap", 0, 2);
  push(bar(31) + beat(0.75), 2, "tap", 0, 2);
  push(bar(31) + beat(2.5), 3, "tap", 0, 2);
  push(bar(34) + beat(0.75), 1, "tap", 0, 2);
  push(bar(34) + beat(2.5), 0, "tap", 0, 2);
  push(bar(35) + beat(1.25), 2, "tap", 0, 2);
  push(bar(35) + beat(2.5), 1, "tap", 0, 2);
  // Chorus C 密度追加
  push(bar(40) + beat(0.75), 1, "tap", 0, 2);
  push(bar(40) + beat(2.5), 0, "tap", 0, 2);
  push(bar(44) + beat(0.75), 2, "tap", 0, 2);
  push(bar(44) + beat(2.5), 1, "tap", 0, 2);
  push(bar(45) + beat(1.25), 0, "tap", 0, 2);
  push(bar(45) + beat(2.5), 3, "tap", 0, 2);
  // Final Chorus 密度追加
  push(bar(52) + beat(0.75), 1, "tap", 0, 2);
  push(bar(52) + beat(2.5), 0, "tap", 0, 2);
  push(bar(56) + beat(0.75), 2, "tap", 0, 2);
  push(bar(56) + beat(2.5), 1, "tap", 0, 2);

  // ========================================
  // ENDING (bar 60-61) フィニッシュ
  // ========================================
  // bar 60
  push(bar(60) + beat(0), 0, "tap");
  push(bar(60) + beat(1), 2, "tap");
  push(bar(60) + beat(2), 1, "tap");
  push(bar(60) + beat(3), 3, "tap");
  // bar 61
  push(bar(61) + beat(0), 0, "hold", beat(3));
  push(bar(61) + beat(2), 2, "tap");

  notes.sort(function (a, b) { return a.t - b.t; });

  // 難易度自動振り分け:
  //   lvl未指定のノーツを拍の位置で lvl 0（Easy） or 1（Normal）に割り振る
  //   強拍（0, 2拍目）→ lvl 0, 弱拍/裏拍 → lvl 1
  //   既にlvl指定があるもの（Hard専用など）は変更しない
  var beatDur = 60 / BPM;
  var barDur = beatDur * 4;
  for (var i = 0; i < notes.length; i++) {
    var n = notes[i];
    if (n.lvl !== undefined) continue;
    var beatInBar = (n.t % barDur) / beatDur;
    var rounded = Math.round(beatInBar * 2) / 2;
    n.lvl = (rounded === 0 || rounded === 2) ? 0 : 1;
  }

  return {
    videoId: "MF4Yw8IS6og",
    title: "Princess Viral",
    bpm: BPM,
    offset: 0,
    duration: 109,
    notes: notes
  };

  /*
    ===== 自分でノーツを編集する方法 =====

    【基本のルール】
      push(時間, レーン, 種類, 長さ, 難易度)
      例）10小節目の2拍目、レーン1、通常ノーツ、Easy〜Hard全て
        push(bar(10) + beat(2), 1, "tap");
        ※第4引数以降は省略可能

      例）10小節目の2拍目、レーン1、通常ノーツ、Hardのみ
        push(bar(10) + beat(2), 1, "tap", 0, 2);

    【時間の書き方】
      bar(小節番号) + beat(拍)
      beat(0)〜beat(3) = 4拍子の各拍
      beat(1.5) = 裏拍（8分音符）
      beat(0.75) = 16分音符

    【ノーツの種類】
      "tap"   : 通常（シングルタップ）
      "hold"  : 長押し（第4引数に長さを秒で指定）
      "tap" : フリック（矢印付き）

    【難易度レベル（第5引数）】
      省略       → 自動で強拍=lvl0 / 弱拍=lvl1 に振り分け
      0          → Easy / Normal / Hard すべてに出る（強制）
      1          → Normal / Hard のみ（強制）
      2          → Hard のみ

    【タイミング調整】
      ノーツが曲より早い → 時間の値を大きく（+0.05ずつ）
      ノーツが曲より遅い → 時間の値を小さく（-0.05ずつ）

    【lvlを手動で固定したい場合】
      自動振り分けをさせず、特定の難易度だけに出すには第5引数を明示:
        push(bar(5) + beat(0), 0, "tap", 0, 0);  // 強制的に全難易度
        push(bar(5) + beat(1), 1, "tap", 0, 1);  // Normal〜Hardのみ
        push(bar(5) + beat(1), 1, "tap", 0, 2);  // Hardのみ
  */
})();
