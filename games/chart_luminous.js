/* ============================================
   ルミナス / 音ノ瀬らこ 譜面データ
   BPM: 86
   小節数: 33 (bar 0-32)
   レーンは全て1(左端), 全て通常ノーツ
   beat(0)=1拍目, beat(1)=2拍目, beat(2)=3拍目, beat(3)=4拍目
   ============================================ */
var CHARTS = CHARTS || {};

CHARTS.luminous = (function () {
  "use strict";

  var BPM = 86;
  var BEAT = 60 / BPM; // 0.69767s
  var b4 = BEAT * 4; // 2.79070s

  var notes = [];

  function push(t, l, type, dur, lvl) {
    var note = { t: +t.toFixed(3), l: l, type: type || "tap", d: dur || 0 };
    if (lvl !== undefined) note.lvl = lvl;
    notes.push(note);
  }

  function bar(n) { return n * b4; }
  function beat(n) { return n * BEAT; }

  // ========================================
  // bar 0
  // ========================================
  // EASY
  push(bar(0) + beat(0), 0, "tap", 0, 0);
  push(bar(0) + beat(1), 0, "tap", 0, 0);
  push(bar(0) + beat(2), 0, "tap", 0, 0);
  push(bar(0) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(0) + beat(0), 0, "tap", 0, 1);
  push(bar(0) + beat(1), 0, "tap", 0, 1);
  push(bar(0) + beat(2), 0, "tap", 0, 1);
  push(bar(0) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(0) + beat(0), 0, "tap", 0, 2);
  push(bar(0) + beat(1), 0, "tap", 0, 2);
  push(bar(0) + beat(2), 0, "tap", 0, 2);
  push(bar(0) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 1
  // ========================================
  // EASY
  push(bar(1) + beat(0), 0, "tap", 0, 0);
  push(bar(1) + beat(1), 0, "tap", 0, 0);
  push(bar(1) + beat(2), 0, "tap", 0, 0);
  push(bar(1) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(1) + beat(0), 0, "tap", 0, 1);
  push(bar(1) + beat(1), 0, "tap", 0, 1);
  push(bar(1) + beat(2), 0, "tap", 0, 1);
  push(bar(1) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(1) + beat(0), 0, "tap", 0, 2);
  push(bar(1) + beat(1), 0, "tap", 0, 2);
  push(bar(1) + beat(2), 0, "tap", 0, 2);
  push(bar(1) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 2
  // ========================================
  // EASY
  push(bar(2) + beat(0), 0, "tap", 0, 0);
  push(bar(2) + beat(1), 0, "tap", 0, 0);
  push(bar(2) + beat(2), 0, "tap", 0, 0);
  push(bar(2) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(2) + beat(0), 0, "tap", 0, 1);
  push(bar(2) + beat(1), 0, "tap", 0, 1);
  push(bar(2) + beat(2), 0, "tap", 0, 1);
  push(bar(2) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(2) + beat(0), 0, "tap", 0, 2);
  push(bar(2) + beat(1), 0, "tap", 0, 2);
  push(bar(2) + beat(2), 0, "tap", 0, 2);
  push(bar(2) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 3
  // ========================================
  // EASY
  push(bar(3) + beat(0), 0, "tap", 0, 0);
  push(bar(3) + beat(1), 0, "tap", 0, 0);
  push(bar(3) + beat(2), 0, "tap", 0, 0);
  push(bar(3) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(3) + beat(0), 0, "tap", 0, 1);
  push(bar(3) + beat(1), 0, "tap", 0, 1);
  push(bar(3) + beat(2), 0, "tap", 0, 1);
  push(bar(3) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(3) + beat(0), 0, "tap", 0, 2);
  push(bar(3) + beat(1), 0, "tap", 0, 2);
  push(bar(3) + beat(2), 0, "tap", 0, 2);
  push(bar(3) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 4
  // ========================================
  // EASY
  push(bar(4) + beat(0), 0, "tap", 0, 0);
  push(bar(4) + beat(1), 0, "tap", 0, 0);
  push(bar(4) + beat(2), 0, "tap", 0, 0);
  push(bar(4) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(4) + beat(0), 0, "tap", 0, 1);
  push(bar(4) + beat(1), 0, "tap", 0, 1);
  push(bar(4) + beat(2), 0, "tap", 0, 1);
  push(bar(4) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(4) + beat(0), 0, "tap", 0, 2);
  push(bar(4) + beat(1), 0, "tap", 0, 2);
  push(bar(4) + beat(2), 0, "tap", 0, 2);
  push(bar(4) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 5
  // ========================================
  // EASY
  push(bar(5) + beat(0), 0, "tap", 0, 0);
  push(bar(5) + beat(1), 0, "tap", 0, 0);
  push(bar(5) + beat(2), 0, "tap", 0, 0);
  push(bar(5) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(5) + beat(0), 0, "tap", 0, 1);
  push(bar(5) + beat(1), 0, "tap", 0, 1);
  push(bar(5) + beat(2), 0, "tap", 0, 1);
  push(bar(5) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(5) + beat(0), 0, "tap", 0, 2);
  push(bar(5) + beat(1), 0, "tap", 0, 2);
  push(bar(5) + beat(2), 0, "tap", 0, 2);
  push(bar(5) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 6
  // ========================================
  // EASY
  push(bar(6) + beat(0), 0, "tap", 0, 0);
  push(bar(6) + beat(1), 0, "tap", 0, 0);
  push(bar(6) + beat(2), 0, "tap", 0, 0);
  push(bar(6) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(6) + beat(0), 0, "tap", 0, 1);
  push(bar(6) + beat(1), 0, "tap", 0, 1);
  push(bar(6) + beat(2), 0, "tap", 0, 1);
  push(bar(6) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(6) + beat(0), 0, "tap", 0, 2);
  push(bar(6) + beat(1), 0, "tap", 0, 2);
  push(bar(6) + beat(2), 0, "tap", 0, 2);
  push(bar(6) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 7
  // ========================================
  // EASY
  push(bar(7) + beat(0), 0, "tap", 0, 0);
  push(bar(7) + beat(1), 0, "tap", 0, 0);
  push(bar(7) + beat(2), 0, "tap", 0, 0);
  push(bar(7) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(7) + beat(0), 0, "tap", 0, 1);
  push(bar(7) + beat(1), 0, "tap", 0, 1);
  push(bar(7) + beat(2), 0, "tap", 0, 1);
  push(bar(7) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(7) + beat(0), 0, "tap", 0, 2);
  push(bar(7) + beat(1), 0, "tap", 0, 2);
  push(bar(7) + beat(2), 0, "tap", 0, 2);
  push(bar(7) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 8
  // ========================================
  // EASY
  push(bar(8) + beat(0), 0, "tap", 0, 0);
  push(bar(8) + beat(1), 0, "tap", 0, 0);
  push(bar(8) + beat(2), 0, "tap", 0, 0);
  push(bar(8) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(8) + beat(0), 0, "tap", 0, 1);
  push(bar(8) + beat(1), 0, "tap", 0, 1);
  push(bar(8) + beat(2), 0, "tap", 0, 1);
  push(bar(8) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(8) + beat(0), 0, "tap", 0, 2);
  push(bar(8) + beat(1), 0, "tap", 0, 2);
  push(bar(8) + beat(2), 0, "tap", 0, 2);
  push(bar(8) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 9
  // ========================================
  // EASY
  push(bar(9) + beat(0), 0, "tap", 0, 0);
  push(bar(9) + beat(1), 0, "tap", 0, 0);
  push(bar(9) + beat(2), 0, "tap", 0, 0);
  push(bar(9) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(9) + beat(0), 0, "tap", 0, 1);
  push(bar(9) + beat(1), 0, "tap", 0, 1);
  push(bar(9) + beat(2), 0, "tap", 0, 1);
  push(bar(9) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(9) + beat(0), 0, "tap", 0, 2);
  push(bar(9) + beat(1), 0, "tap", 0, 2);
  push(bar(9) + beat(2), 0, "tap", 0, 2);
  push(bar(9) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 10
  // ========================================
  // EASY
  push(bar(10) + beat(0), 0, "tap", 0, 0);
  push(bar(10) + beat(1), 0, "tap", 0, 0);
  push(bar(10) + beat(2), 0, "tap", 0, 0);
  push(bar(10) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(10) + beat(0), 0, "tap", 0, 1);
  push(bar(10) + beat(1), 0, "tap", 0, 1);
  push(bar(10) + beat(2), 0, "tap", 0, 1);
  push(bar(10) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(10) + beat(0), 0, "tap", 0, 2);
  push(bar(10) + beat(1), 0, "tap", 0, 2);
  push(bar(10) + beat(2), 0, "tap", 0, 2);
  push(bar(10) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 11
  // ========================================
  // EASY
  push(bar(11) + beat(0), 0, "tap", 0, 0);
  push(bar(11) + beat(1), 0, "tap", 0, 0);
  push(bar(11) + beat(2), 0, "tap", 0, 0);
  push(bar(11) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(11) + beat(0), 0, "tap", 0, 1);
  push(bar(11) + beat(1), 0, "tap", 0, 1);
  push(bar(11) + beat(2), 0, "tap", 0, 1);
  push(bar(11) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(11) + beat(0), 0, "tap", 0, 2);
  push(bar(11) + beat(1), 0, "tap", 0, 2);
  push(bar(11) + beat(2), 0, "tap", 0, 2);
  push(bar(11) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 12
  // ========================================
  // EASY
  push(bar(12) + beat(0), 0, "tap", 0, 0);
  push(bar(12) + beat(1), 0, "tap", 0, 0);
  push(bar(12) + beat(2), 0, "tap", 0, 0);
  push(bar(12) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(12) + beat(0), 0, "tap", 0, 1);
  push(bar(12) + beat(1), 0, "tap", 0, 1);
  push(bar(12) + beat(2), 0, "tap", 0, 1);
  push(bar(12) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(12) + beat(0), 0, "tap", 0, 2);
  push(bar(12) + beat(1), 0, "tap", 0, 2);
  push(bar(12) + beat(2), 0, "tap", 0, 2);
  push(bar(12) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 13
  // ========================================
  // EASY
  push(bar(13) + beat(0), 0, "tap", 0, 0);
  push(bar(13) + beat(1), 0, "tap", 0, 0);
  push(bar(13) + beat(2), 0, "tap", 0, 0);
  push(bar(13) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(13) + beat(0), 0, "tap", 0, 1);
  push(bar(13) + beat(1), 0, "tap", 0, 1);
  push(bar(13) + beat(2), 0, "tap", 0, 1);
  push(bar(13) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(13) + beat(0), 0, "tap", 0, 2);
  push(bar(13) + beat(1), 0, "tap", 0, 2);
  push(bar(13) + beat(2), 0, "tap", 0, 2);
  push(bar(13) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 14
  // ========================================
  // EASY
  push(bar(14) + beat(0), 0, "tap", 0, 0);
  push(bar(14) + beat(1), 0, "tap", 0, 0);
  push(bar(14) + beat(2), 0, "tap", 0, 0);
  push(bar(14) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(14) + beat(0), 0, "tap", 0, 1);
  push(bar(14) + beat(1), 0, "tap", 0, 1);
  push(bar(14) + beat(2), 0, "tap", 0, 1);
  push(bar(14) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(14) + beat(0), 0, "tap", 0, 2);
  push(bar(14) + beat(1), 0, "tap", 0, 2);
  push(bar(14) + beat(2), 0, "tap", 0, 2);
  push(bar(14) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 15
  // ========================================
  // EASY
  push(bar(15) + beat(0), 0, "tap", 0, 0);
  push(bar(15) + beat(1), 0, "tap", 0, 0);
  push(bar(15) + beat(2), 0, "tap", 0, 0);
  push(bar(15) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(15) + beat(0), 0, "tap", 0, 1);
  push(bar(15) + beat(1), 0, "tap", 0, 1);
  push(bar(15) + beat(2), 0, "tap", 0, 1);
  push(bar(15) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(15) + beat(0), 0, "tap", 0, 2);
  push(bar(15) + beat(1), 0, "tap", 0, 2);
  push(bar(15) + beat(2), 0, "tap", 0, 2);
  push(bar(15) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 16
  // ========================================
  // EASY
  push(bar(16) + beat(0), 0, "tap", 0, 0);
  push(bar(16) + beat(1), 0, "tap", 0, 0);
  push(bar(16) + beat(2), 0, "tap", 0, 0);
  push(bar(16) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(16) + beat(0), 0, "tap", 0, 1);
  push(bar(16) + beat(1), 0, "tap", 0, 1);
  push(bar(16) + beat(2), 0, "tap", 0, 1);
  push(bar(16) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(16) + beat(0), 0, "tap", 0, 2);
  push(bar(16) + beat(1), 0, "tap", 0, 2);
  push(bar(16) + beat(2), 0, "tap", 0, 2);
  push(bar(16) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 17
  // ========================================
  // EASY
  push(bar(17) + beat(0), 0, "tap", 0, 0);
  push(bar(17) + beat(1), 0, "tap", 0, 0);
  push(bar(17) + beat(2), 0, "tap", 0, 0);
  push(bar(17) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(17) + beat(0), 0, "tap", 0, 1);
  push(bar(17) + beat(1), 0, "tap", 0, 1);
  push(bar(17) + beat(2), 0, "tap", 0, 1);
  push(bar(17) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(17) + beat(0), 0, "tap", 0, 2);
  push(bar(17) + beat(1), 0, "tap", 0, 2);
  push(bar(17) + beat(2), 0, "tap", 0, 2);
  push(bar(17) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 18
  // ========================================
  // EASY
  push(bar(18) + beat(0), 0, "tap", 0, 0);
  push(bar(18) + beat(1), 0, "tap", 0, 0);
  push(bar(18) + beat(2), 0, "tap", 0, 0);
  push(bar(18) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(18) + beat(0), 0, "tap", 0, 1);
  push(bar(18) + beat(1), 0, "tap", 0, 1);
  push(bar(18) + beat(2), 0, "tap", 0, 1);
  push(bar(18) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(18) + beat(0), 0, "tap", 0, 2);
  push(bar(18) + beat(1), 0, "tap", 0, 2);
  push(bar(18) + beat(2), 0, "tap", 0, 2);
  push(bar(18) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 19
  // ========================================
  // EASY
  push(bar(19) + beat(0), 0, "tap", 0, 0);
  push(bar(19) + beat(1), 0, "tap", 0, 0);
  push(bar(19) + beat(2), 0, "tap", 0, 0);
  push(bar(19) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(19) + beat(0), 0, "tap", 0, 1);
  push(bar(19) + beat(1), 0, "tap", 0, 1);
  push(bar(19) + beat(2), 0, "tap", 0, 1);
  push(bar(19) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(19) + beat(0), 0, "tap", 0, 2);
  push(bar(19) + beat(1), 0, "tap", 0, 2);
  push(bar(19) + beat(2), 0, "tap", 0, 2);
  push(bar(19) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 20
  // ========================================
  // EASY
  push(bar(20) + beat(0), 0, "tap", 0, 0);
  push(bar(20) + beat(1), 0, "tap", 0, 0);
  push(bar(20) + beat(2), 0, "tap", 0, 0);
  push(bar(20) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(20) + beat(0), 0, "tap", 0, 1);
  push(bar(20) + beat(1), 0, "tap", 0, 1);
  push(bar(20) + beat(2), 0, "tap", 0, 1);
  push(bar(20) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(20) + beat(0), 0, "tap", 0, 2);
  push(bar(20) + beat(1), 0, "tap", 0, 2);
  push(bar(20) + beat(2), 0, "tap", 0, 2);
  push(bar(20) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 21
  // ========================================
  // EASY
  push(bar(21) + beat(0), 0, "tap", 0, 0);
  push(bar(21) + beat(1), 0, "tap", 0, 0);
  push(bar(21) + beat(2), 0, "tap", 0, 0);
  push(bar(21) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(21) + beat(0), 0, "tap", 0, 1);
  push(bar(21) + beat(1), 0, "tap", 0, 1);
  push(bar(21) + beat(2), 0, "tap", 0, 1);
  push(bar(21) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(21) + beat(0), 0, "tap", 0, 2);
  push(bar(21) + beat(1), 0, "tap", 0, 2);
  push(bar(21) + beat(2), 0, "tap", 0, 2);
  push(bar(21) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 22
  // ========================================
  // EASY
  push(bar(22) + beat(0), 0, "tap", 0, 0);
  push(bar(22) + beat(1), 0, "tap", 0, 0);
  push(bar(22) + beat(2), 0, "tap", 0, 0);
  push(bar(22) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(22) + beat(0), 0, "tap", 0, 1);
  push(bar(22) + beat(1), 0, "tap", 0, 1);
  push(bar(22) + beat(2), 0, "tap", 0, 1);
  push(bar(22) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(22) + beat(0), 0, "tap", 0, 2);
  push(bar(22) + beat(1), 0, "tap", 0, 2);
  push(bar(22) + beat(2), 0, "tap", 0, 2);
  push(bar(22) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 23
  // ========================================
  // EASY
  push(bar(23) + beat(0), 0, "tap", 0, 0);
  push(bar(23) + beat(1), 0, "tap", 0, 0);
  push(bar(23) + beat(2), 0, "tap", 0, 0);
  push(bar(23) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(23) + beat(0), 0, "tap", 0, 1);
  push(bar(23) + beat(1), 0, "tap", 0, 1);
  push(bar(23) + beat(2), 0, "tap", 0, 1);
  push(bar(23) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(23) + beat(0), 0, "tap", 0, 2);
  push(bar(23) + beat(1), 0, "tap", 0, 2);
  push(bar(23) + beat(2), 0, "tap", 0, 2);
  push(bar(23) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 24
  // ========================================
  // EASY
  push(bar(24) + beat(0), 0, "tap", 0, 0);
  push(bar(24) + beat(1), 0, "tap", 0, 0);
  push(bar(24) + beat(2), 0, "tap", 0, 0);
  push(bar(24) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(24) + beat(0), 0, "tap", 0, 1);
  push(bar(24) + beat(1), 0, "tap", 0, 1);
  push(bar(24) + beat(2), 0, "tap", 0, 1);
  push(bar(24) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(24) + beat(0), 0, "tap", 0, 2);
  push(bar(24) + beat(1), 0, "tap", 0, 2);
  push(bar(24) + beat(2), 0, "tap", 0, 2);
  push(bar(24) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 25
  // ========================================
  // EASY
  push(bar(25) + beat(0), 0, "tap", 0, 0);
  push(bar(25) + beat(1), 0, "tap", 0, 0);
  push(bar(25) + beat(2), 0, "tap", 0, 0);
  push(bar(25) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(25) + beat(0), 0, "tap", 0, 1);
  push(bar(25) + beat(1), 0, "tap", 0, 1);
  push(bar(25) + beat(2), 0, "tap", 0, 1);
  push(bar(25) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(25) + beat(0), 0, "tap", 0, 2);
  push(bar(25) + beat(1), 0, "tap", 0, 2);
  push(bar(25) + beat(2), 0, "tap", 0, 2);
  push(bar(25) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 26
  // ========================================
  // EASY
  push(bar(26) + beat(0), 0, "tap", 0, 0);
  push(bar(26) + beat(1), 0, "tap", 0, 0);
  push(bar(26) + beat(2), 0, "tap", 0, 0);
  push(bar(26) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(26) + beat(0), 0, "tap", 0, 1);
  push(bar(26) + beat(1), 0, "tap", 0, 1);
  push(bar(26) + beat(2), 0, "tap", 0, 1);
  push(bar(26) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(26) + beat(0), 0, "tap", 0, 2);
  push(bar(26) + beat(1), 0, "tap", 0, 2);
  push(bar(26) + beat(2), 0, "tap", 0, 2);
  push(bar(26) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 27
  // ========================================
  // EASY
  push(bar(27) + beat(0), 0, "tap", 0, 0);
  push(bar(27) + beat(1), 0, "tap", 0, 0);
  push(bar(27) + beat(2), 0, "tap", 0, 0);
  push(bar(27) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(27) + beat(0), 0, "tap", 0, 1);
  push(bar(27) + beat(1), 0, "tap", 0, 1);
  push(bar(27) + beat(2), 0, "tap", 0, 1);
  push(bar(27) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(27) + beat(0), 0, "tap", 0, 2);
  push(bar(27) + beat(1), 0, "tap", 0, 2);
  push(bar(27) + beat(2), 0, "tap", 0, 2);
  push(bar(27) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 28
  // ========================================
  // EASY
  push(bar(28) + beat(0), 0, "tap", 0, 0);
  push(bar(28) + beat(1), 0, "tap", 0, 0);
  push(bar(28) + beat(2), 0, "tap", 0, 0);
  push(bar(28) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(28) + beat(0), 0, "tap", 0, 1);
  push(bar(28) + beat(1), 0, "tap", 0, 1);
  push(bar(28) + beat(2), 0, "tap", 0, 1);
  push(bar(28) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(28) + beat(0), 0, "tap", 0, 2);
  push(bar(28) + beat(1), 0, "tap", 0, 2);
  push(bar(28) + beat(2), 0, "tap", 0, 2);
  push(bar(28) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 29
  // ========================================
  // EASY
  push(bar(29) + beat(0), 0, "tap", 0, 0);
  push(bar(29) + beat(1), 0, "tap", 0, 0);
  push(bar(29) + beat(2), 0, "tap", 0, 0);
  push(bar(29) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(29) + beat(0), 0, "tap", 0, 1);
  push(bar(29) + beat(1), 0, "tap", 0, 1);
  push(bar(29) + beat(2), 0, "tap", 0, 1);
  push(bar(29) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(29) + beat(0), 0, "tap", 0, 2);
  push(bar(29) + beat(1), 0, "tap", 0, 2);
  push(bar(29) + beat(2), 0, "tap", 0, 2);
  push(bar(29) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 30
  // ========================================
  // EASY
  push(bar(30) + beat(0), 0, "tap", 0, 0);
  push(bar(30) + beat(1), 0, "tap", 0, 0);
  push(bar(30) + beat(2), 0, "tap", 0, 0);
  push(bar(30) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(30) + beat(0), 0, "tap", 0, 1);
  push(bar(30) + beat(1), 0, "tap", 0, 1);
  push(bar(30) + beat(2), 0, "tap", 0, 1);
  push(bar(30) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(30) + beat(0), 0, "tap", 0, 2);
  push(bar(30) + beat(1), 0, "tap", 0, 2);
  push(bar(30) + beat(2), 0, "tap", 0, 2);
  push(bar(30) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 31
  // ========================================
  // EASY
  push(bar(31) + beat(0), 0, "tap", 0, 0);
  push(bar(31) + beat(1), 0, "tap", 0, 0);
  push(bar(31) + beat(2), 0, "tap", 0, 0);
  push(bar(31) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(31) + beat(0), 0, "tap", 0, 1);
  push(bar(31) + beat(1), 0, "tap", 0, 1);
  push(bar(31) + beat(2), 0, "tap", 0, 1);
  push(bar(31) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(31) + beat(0), 0, "tap", 0, 2);
  push(bar(31) + beat(1), 0, "tap", 0, 2);
  push(bar(31) + beat(2), 0, "tap", 0, 2);
  push(bar(31) + beat(3), 0, "tap", 0, 2);

  // ========================================
  // bar 32
  // ========================================
  // EASY
  push(bar(32) + beat(0), 0, "tap", 0, 0);
  push(bar(32) + beat(1), 0, "tap", 0, 0);
  push(bar(32) + beat(2), 0, "tap", 0, 0);
  push(bar(32) + beat(3), 0, "tap", 0, 0);
  // NORMAL
  push(bar(32) + beat(0), 0, "tap", 0, 1);
  push(bar(32) + beat(1), 0, "tap", 0, 1);
  push(bar(32) + beat(2), 0, "tap", 0, 1);
  push(bar(32) + beat(3), 0, "tap", 0, 1);
  // HARD
  push(bar(32) + beat(0), 0, "tap", 0, 2);
  push(bar(32) + beat(1), 0, "tap", 0, 2);
  push(bar(32) + beat(2), 0, "tap", 0, 2);
  push(bar(32) + beat(3), 0, "tap", 0, 2);

  notes.sort(function (a, b) { return a.t - b.t; });

  return {
    videoId: "MklYo2c3QmM",
    title: "ルミナス",
    bpm: BPM,
    offset: 0,
    duration: 93,
    notes: notes
  };
})();
