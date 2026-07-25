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
  // EASY
  // push(時間, レーン, 種類, 長さ, 難易度)
  // ========================================
  // bar0
   push(bar(0) + beat(1), 1, "tap", 0, 0);
   push(bar(0) + beat(2), 1, "tap", 0, 0);
   push(bar(0) + beat(3), 1, "tap", 0, 0);
   push(bar(0) + beat(4), 1, "tap", 0, 0);
   push(bar(1) + beat(1), 4, "tap", 0, 0);
   push(bar(1) + beat(2), 4, "tap", 0, 0);
   push(bar(1) + beat(3), 4, "tap", 0, 0);
   push(bar(1) + beat(4), 4, "tap", 0, 0);
   push(bar(2) + beat(1), 2, "tap", 0, 0);
   push(bar(2) + beat(2), 2, "tap", 0, 0);
   push(bar(2) + beat(3), 2, "tap", 0, 0);
   push(bar(2) + beat(4), 2, "tap", 0, 0);
   push(bar(3) + beat(1), 3, "tap", 0, 0);
   push(bar(3) + beat(2), 3, "tap", 0, 0);
   push(bar(3) + beat(3), 3, "tap", 0, 0);
   push(bar(3) + beat(4), 3, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);



   
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
      例）10小節目の2拍目、レーン1、通常ノーツ、Easyのみ
        push(bar(10) + beat(2), 1, "tap", 0, 0);

      例）10小節目の2拍目、レーン1、通常ノーツ、Hardのみ
        push(bar(10) + beat(2), 1, "tap", 0, 2);

    【時間の書き方】
      bar(小節番号) + beat(拍)
      beat(0)〜beat(3) = 4拍子の各拍
      beat(0.5) = 8分音符（裏拍）
      beat(0.25) = 16分音符
      beat(0.125) = 32分音符
      beat(1/3) = 3連符（好きな小数が使えます）

    【ノーツの種類】
      "tap"   : 通常（シングルタップ）
      "hold"  : 長押し（第4引数に長さを秒で指定）

    【難易度レベル（第5引数 lvl）】
      省略       → 自動で強拍=lvl0(Easy) / 弱拍=lvl1(Normal) に振り分け
      0          → Easy のみ
      1          → Normal のみ
      2          → Hard のみ

    【タイミング調整】
      ノーツが曲より早い → 時間の値を大きく（+0.05ずつ）
      ノーツが曲より遅い → 時間の値を小さく（-0.05ずつ）

    【拍のバリエーション】
      beat(0)     = 表拍
      beat(0.5)   = 8分裏拍
      beat(0.25)  = 16分
      beat(0.125) = 32分
      beat(0.75)  = 16分（3拍目の裏）
      好きな小数を使ってリズムを表現できます。
  */
})();
