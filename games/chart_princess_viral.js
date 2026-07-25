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
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);
   push(bar(0) + beat(), 1, "tap", 0, 0);



    
  notes.sort(function (a, b) { return a.t - b.t; });

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
      0          → Easy のみ
      1          → Normal のみ
      2          → Hard のみ
      省略した場合 → Easy（lvl 0）扱いになるので全レベルに書くこと

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
