"use strict";

var PARAMS = [
  { id: 'netsu',      icon: '🔥', name: '情熱' },
  { id: 'sousaku',    icon: '🎨', name: '創作' },
  { id: 'koudou',     icon: '⚡', name: '行動力' },
  { id: 'shakou',     icon: '🤝', name: '社交性' },
  { id: 'asobi',      icon: '🎮', name: '遊び心' },
  { id: 'iyashi',     icon: '🫧', name: '癒し' },
  { id: 'mystery',    icon: '🌙', name: 'ミステリアス' },
  { id: 'cool',       icon: '😎', name: 'クール' },
  { id: 'pon',        icon: '🤪', name: 'PON度' }
];
var PARAM_IDS = PARAMS.map(function(p) { return p.id; });

var TALENTS = [
  {
    id: 'konomi', name: '甘狼このみ', type: '🔥 情熱クリエイター', image: 'konomi.webp',
    desc: 'あなたは、「好き！」という気持ちをエネルギーに変えられる人です。\n\n興味を持ったことにはとことん夢中になり、ただ楽しむだけでなく、「自分でも何か作ってみたい！」と思うことが多いのでは？\n\n自分の好きなものを大切にしながら、それを新しい形にしていく行動力もあなたの魅力。情熱を形に変える、クリエイティブなタイプです。',
    profile: { netsu:100, sousaku:100, koudou:90, shakou:30, asobi:50, iyashi:50, mystery:20, cool:20, pon:80 }
  },
  {
    id: 'nono', name: '音ノ乃のの', type: '🎶 ハッピーアーティスト', image: 'nono.webp',
    desc: 'あなたは、楽しいことや好きなことを、周りの人と一緒に楽しめる人です。\n\n自分が楽しむだけでなく、「これ楽しいよ！」と誰かに伝えたり、みんなで思い出を作ったりすることが好きなのでは？\n\n豊かな表現力と明るいエネルギーを持ち、あなたの楽しそうな姿が周囲まで明るくすることも。好きなものを全力で楽しむ、ハッピーな表現者です。',
    profile: { netsu:100, sousaku:50, koudou:100, shakou:60, asobi:50, iyashi:70, mystery:20, cool:80, pon:50 }
  },
  {
    id: 'akubi', name: 'あくび・でもんすぺーど', type: '👑 個性派エンターテイナー', image: 'akubi.webp',
    desc: 'あなたは、「自分は自分！」という個性を大切にする人です。\n\n周りと同じである必要はなく、自分が面白いと思ったことや、自分らしいと思ったことを思いきり楽しめるのがあなたの魅力。\n\n独自の世界観と遊び心を持ち、自分自身も楽しみながら、周囲の人まで楽しませることができるタイプです。',
    profile: { netsu:70, sousaku:40, koudou:70, shakou:30, asobi:50, iyashi:30, mystery:20, cool:90, pon:50 }
  },
  {
    id: 'rako', name: '音ノ瀬らこ', type: '⚡ ムードメーカー', image: 'rako.webp',
    desc: 'あなたは、その場の空気を明るくするパワーを持っている人です。\n\n楽しいことが大好きで、誰かと一緒に盛り上がることに大きな喜びを感じるのでは？\n\n思い立ったらすぐに動ける行動力と、人との距離を縮める社交性を持つあなた。あなたがいるだけで、いつの間にか場がにぎやかになっているかもしれません。',
    profile: { netsu:70, sousaku:40, koudou:60, shakou:80, asobi:90, iyashi:60, mystery:20, cool:70, pon:40 }
  },
  {
    id: 'yura', name: 'ゆらぎゆら', type: '🫧 ヒーリングタイプ', image: 'yura.webp',
    desc: 'あなたは、周囲の人に安心感を与えられる人です。\n\n誰かの話を聞いたり、そっと寄り添ったりすることが得意なのでは？\n\n穏やかな優しさを持ち、自分のペースも大切にできるあなた。あなたの存在や言葉が、誰かにとっての「ちょっと休める場所」になることもありそうです。',
    profile: { netsu:60, sousaku:60, koudou:80, shakou:60, asobi:70, iyashi:100, mystery:20, cool:40, pon:80 }
  },
  {
    id: 'koma', name: '小廻こま', type: '🎮 わくわくプレイヤー', image: 'koma.webp',
    desc: 'あなたは、日常の中にある「楽しい！」を見つけるのが得意な人です。\n\n大きなイベントがなくても、ちょっとした遊びや面白いことを見つけて楽しめるのでは？\n\nリアクションも豊かで、周囲の人と一緒に楽しむことも大好き。あなたにとって、毎日はまだまだ遊び足りないゲームのようなものかもしれません。',
    profile: { netsu:60, sousaku:40, koudou:70, shakou:80, asobi:100, iyashi:50, mystery:30, cool:50, pon:20 }
  },
  {
    id: 'rizu', name: '雨夜リズ', type: '🌂 ギャップ系ミステリアス', image: 'rizu.webp',
    desc: 'あなたは、独自の雰囲気と、予想できない魅力を持っている人です。\n\n一見すると落ち着いていて、何を考えているのか少し分からないと思われることもあるかもしれません。\n\nでも実際には、意外と天然だったり、ちょっとPONな一面があったり。そんな見た目と中身のギャップこそ、あなたの大きな魅力です。',
    profile: { netsu:60, sousaku:70, koudou:50, shakou:60, asobi:60, iyashi:50, mystery:100, cool:70, pon:100 }
  },
  {
    id: 'tsukuri', name: '眠雲ツクリ', type: '🛠️ マルチクリエイター', image: 'tukuri.webp',
    desc: 'あなたは、「やってみたい！」と思ったら、どんどん世界を広げていける人です。\n\n一つのことだけにとどまらず、いろいろなことに興味を持ち、「これもやってみたい！」と新しいことに挑戦することが多いのでは？\n\n好奇心と発想力があなたの強み。思いついたアイデアを実際に形にしていく、可能性いっぱいのタイプです。',
    profile: { netsu:80, sousaku:90, koudou:70, shakou:80, asobi:70, iyashi:60, mystery:20, cool:70, pon:20 }
  },
  {
    id: 'nuh', name: '虹深°ぬふ', type: '🎨 カラフルアーティスト', image: 'nuhu.webp',
    desc: 'あなたは、身の回りのものからたくさんの刺激を受け、自分らしく表現できる人です。\n\n「これ好き！」と思ったものを見つけると、じっくり楽しむだけでなく、自分なりの形にしてみたくなるのでは？\n\n豊かな感性と好奇心を持ち、あなたの中には人とは少し違う、色鮮やかな世界が広がっているかもしれません。',
    profile: { netsu:80, sousaku:100, koudou:90, shakou:70, asobi:80, iyashi:65, mystery:20, cool:40, pon:30 }
  },
  {
    id: 'rei', name: '夕霧レイ', type: '🎯 クールロックオン', image: 'rei.webp',
    desc: 'あなたは、自分の目標や興味のあるものに、静かに集中できる人です。\n\n周囲が盛り上がっていても自分のペースを失わず、狙いを定めたらじっくり取り組めるのでは？\n\n一見クールに見えても、実は自分だけのこだわりやユーモアを持っているあなた。ふとした瞬間に見せる意外な一面が、周囲を驚かせることもありそうです。',
    profile: { netsu:70, sousaku:40, koudou:70, shakou:80, asobi:80, iyashi:40, mystery:40, cool:100, pon:20 }
  },
  {
    id: 'mili', name: 'ミリちゃん', type: '🌟 ミリちゃん', image: 'millityan.jpg',
    desc: 'あなたは、いろいろな個性を楽しみ、誰かの「好き」を応援できる人です。\n\n自分が前に出るだけでなく、誰かの挑戦を見守ったり、好きなものを一緒に楽しんだりすることに喜びを感じるのでは？\n\n明るさ、優しさ、好奇心、遊び心。あなたの中には、たくさんの魅力がバランスよく詰まっています。\n\nあなたは、ミリプロを楽しむすべての人の心にいる「ミリちゃん」タイプかもしれません。 🌟',
    profile: { netsu:50, sousaku:50, koudou:50, shakou:50, asobi:50, iyashi:50, mystery:50, cool:50, pon:50 }
  }
];

var QUESTIONS = [
  {
    q: '新しいミリプロメンバーを見つけた！まず最初にすることは？',
    options: [
      { text: '過去配信を全部さかのぼって見る！',     add: { koudou:15, asobi:5 } },
      { text: 'そのメンバーの推しポイントをまとめたくなる', add: { sousaku:10, netsu:5 } },
      { text: 'すぐに友達に「この子すごい！」と布教する', add: { shakou:15, asobi:5 } },
      { text: 'まずは公式プロフィールをじっくりチェック',   add: { cool:10, mystery:5 } }
    ]
  },
  {
    q: '初めて推しの配信を見たときのあなたの反応は？',
    options: [
      { text: '「この子好き！！」と即・確・沼',         add: { netsu:15, cool:5 } },
      { text: '「描きたい…！」とファンアートを描き始める', add: { sousaku:15, koudou:5 } },
      { text: 'コメントで「楽しすぎました！」と伝える',   add: { shakou:10, netsu:5 } },
      { text: '気に入ったけど、しばらくは静かに観測',     add: { mystery:15, iyashi:5 } }
    ]
  },
  {
    q: '楽しみにしていた推しの配信が急遽中止に。あなたは？',
    options: [
      { text: 'じゃあ他のメンバーのアーカイブを見よう！', add: { koudou:10, asobi:10 } },
      { text: '「まあいっか」とゆっくり休む日にする',     add: { iyashi:10, cool:5 } },
      { text: '同じくファンの友達と語り合う',           add: { shakou:15 } },
      { text: '「へー、そうなんだ〜」と気にしない',       add: { cool:10, pon:5 } }
    ]
  },
  {
    q: '推しに一番見てほしい配信ジャンルは？',
    options: [
      { text: '推しが大好きなものを語り倒す配信',       add: { netsu:10, sousaku:10 } },
      { text: 'ワイワイ楽しそうなゲーム実況',           add: { asobi:10, shakou:10 } },
      { text: 'まったり雑談・癒し系配信',               add: { iyashi:15, sousaku:5 } },
      { text: '誰も予想できない実験的な新企画',           add: { sousaku:10, mystery:15 } }
    ]
  },
  {
    q: 'ファンの間であなたのイメージとして一番言われがちなのは？',
    options: [
      { text: '「推しのために動きすぎw」',              add: { koudou:15 } },
      { text: '「推しの解釈が独特すぎる」',              add: { mystery:15, sousaku:5 } },
      { text: '「一緒に推し活すると楽しい！」',           add: { shakou:10, asobi:10 } },
      { text: '「天然な推し方してるw」',                add: { pon:20 } }
    ]
  },
  {
    q: '推しの生配信中、想定外のハプニングが発生！あなたは？',
    options: [
      { text: 'コメントで盛り上げてサポート！',           add: { koudou:15, netsu:5 } },
      { text: '「草」「これは笑う」と楽しむ',            add: { asobi:15, pon:5 } },
      { text: '「どういう流れでそうなった？」と分析',     add: { cool:15, mystery:5 } },
      { text: '「大丈夫かな…」と心配しつつ見守る',      add: { iyashi:15 } }
    ]
  },
  {
    q: '休日、あなたの一番理想の過ごし方は？',
    options: [
      { text: '推しのアーカイブを一気見する日',           add: { netsu:15, sousaku:5 } },
      { text: '配信をみながらオタク友達と通話',           add: { shakou:15, asobi:10 } },
      { text: '推しの配信をBGMにのんびり過ごす',         add: { iyashi:10, mystery:10 } },
      { text: '気ままに色々なメンバーの配信をはしご',     add: { koudou:5, asobi:10, pon:5 } }
    ]
  },
  {
    q: '推しが配信で落ち込んでいる様子…あなたはどうする？',
    options: [
      { text: 'コメントで「応援してるよ！」と送る',       add: { koudou:10, iyashi:10 } },
      { text: '温かい目で見守りながらそっと応援',         add: { iyashi:15, shakou:5 } },
      { text: '「これをみたら元気になるかも」と企む',     add: { sousaku:10, koudou:5 } },
      { text: '「人間だからね」と静かに受け止める',       add: { cool:15, iyashi:5 } }
    ]
  },
  {
    q: 'あなたが「この推し、すごい…！」と最も感じる瞬間は？',
    options: [
      { text: '好きなことに全力な姿を見たとき',           add: { netsu:20 } },
      { text: '新しい企画や作品を生み出したとき',         add: { sousaku:15, koudou:5 } },
      { text: '他のメンバーやファンと楽しそうに交流する姿', add: { shakou:15, asobi:5 } },
      { text: '知らなかった意外な一面を見たとき',         add: { mystery:15, cool:5 } }
    ]
  },
  {
    q: 'あなたが目指したい理想のファン像は？',
    options: [
      { text: '推しに全力で愛を届けるオタク',             add: { netsu:15 } },
      { text: '推しから刺激を受けて自分も創作するオタク', add: { sousaku:15 } },
      { text: 'みんなで推しを盛り上げるオタク',           add: { shakou:10, asobi:10 } },
      { text: '距離感をわきまえて静かに推すオタク',       add: { cool:15, iyashi:5 } }
    ]
  }
];

var MAX_POSSIBLE = {};
(function() {
  var totals = {};
  PARAM_IDS.forEach(function(id) { totals[id] = 0; });
  QUESTIONS.forEach(function(q) {
    q.options.forEach(function(opt) {
      for (var k in opt.add) {
        if (totals.hasOwnProperty(k)) totals[k] += opt.add[k];
      }
    });
  });
  MAX_POSSIBLE = totals;
})();

var state = {
  step: 0,
  scores: {},
  answers: []
};

var screens = {
  start: document.getElementById('start-screen'),
  question: document.getElementById('question-screen'),
  result: document.getElementById('result-screen')
};
var qText = document.getElementById('q-text');
var qNumber = document.getElementById('q-number');
var qOptions = document.getElementById('q-options');
var qProgressText = document.getElementById('q-progress-text');
var qProgressFill = document.getElementById('q-progress-fill');
var resultHeader = document.getElementById('result-header');
var resultDesc = document.getElementById('result-desc');
var subResult = document.getElementById('sub-result');
var paramsGrid = document.getElementById('params-grid');
var radarCanvas = document.getElementById('radar-chart');
var elShareCanvas = document.getElementById('share-canvas');
var elBtnSave = document.getElementById('btn-save');
var elBtnShare = document.getElementById('btn-share');
var elBtnX = document.getElementById('btn-x');
var lastResult = null;

function showScreen(id) {
  for (var k in screens) {
    screens[k].classList.toggle('active', k === id);
  }
}

function initScores() {
  var s = {};
  PARAM_IDS.forEach(function(id) { s[id] = 0; });
  return s;
}

function normalizeScores(raw) {
  var norm = {};
  PARAM_IDS.forEach(function(id) {
    var maxVal = MAX_POSSIBLE[id];
    norm[id] = maxVal > 0 ? Math.round(raw[id] / maxVal * 100) : 0;
  });
  return norm;
}

function cosineSimilarity(a, b) {
  var dot = 0, nA = 0, nB = 0;
  PARAM_IDS.forEach(function(id) {
    var av = a[id], bv = b[id];
    dot += av * bv;
    nA += av * av;
    nB += bv * bv;
  });
  var denom = Math.sqrt(nA) * Math.sqrt(nB);
  return denom === 0 ? 0 : dot / denom;
}

function calcResult() {
  var norm = normalizeScores(state.scores);
  var results = TALENTS.map(function(t) {
    return { talent: t, similarity: cosineSimilarity(norm, t.profile) };
  });
  results.sort(function(a, b) { return b.similarity - a.similarity; });

  var allHigh = PARAM_IDS.every(function(id) { return norm[id] >= 70; });

  if (allHigh) {
    var miliIdx = -1;
    for (var i = 0; i < results.length; i++) {
      if (results[i].talent.id === 'mili') { miliIdx = i; break; }
    }
    if (miliIdx >= 0) {
      var mili = results.splice(miliIdx, 1)[0];
      results.unshift(mili);
    }
  }

  var top1 = results[0];
  var top2 = results[1] || results[0];
  var isMiliSpecial = allHigh && top1.talent.id === 'mili';

  return {
    norm: norm,
    primary: top1,
    secondary: top2,
    allHigh: isMiliSpecial,
    results: results
  };
}

var LABELS = ['A', 'B', 'C', 'D'];

function renderQuestion(step) {
  var q = QUESTIONS[step];
  qText.textContent = q.q;
  qNumber.textContent = 'Q' + (step + 1);
  qProgressText.textContent = (step + 1) + ' / ' + QUESTIONS.length;
  qProgressFill.style.width = ((step + 1) / QUESTIONS.length * 100) + '%';

  var html = '';
  for (var i = 0; i < q.options.length; i++) {
    html += '<button class="option-btn" onclick="selectAnswer(' + i + ')">'
      + '<span class="opt-label">' + LABELS[i] + '</span>'
      + '<span class="opt-text">' + q.options[i].text + '</span>'
      + '</button>';
  }
  qOptions.innerHTML = html;

  document.getElementById('question-card').scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(idx) {
  var q = QUESTIONS[state.step];
  var opt = q.options[idx];
  for (var k in opt.add) {
    state.scores[k] += opt.add[k];
  }
  state.answers.push(idx);
  state.step++;

  if (state.step >= QUESTIONS.length) {
    showResult();
  } else {
    renderQuestion(state.step);
  }
}

function showResult() {
  var result = calcResult();
  var primary = result.primary;
  var primaryPct = Math.round(primary.similarity * 100);

  var specialBadge = result.allHigh
    ? '<div style="font-size:12px;background:linear-gradient(135deg,var(--primary),#b388ff);color:#fff;display:inline-block;padding:2px 12px;border-radius:999px;margin-bottom:4px;">🌟 バランス型・特別診断</div>'
    : '';

  var imgHtml = '<img class="result-img" src="../images/talents/' + primary.talent.image + '" alt="' + primary.talent.name + '">';

  resultHeader.innerHTML = specialBadge
    + imgHtml
    + '<div class="result-label">あなたは</div>'
    + '<div class="result-type">' + primary.talent.type + '！</div>'
    + '<div class="result-member">' + primary.talent.name + '</div>'
    + '<div class="result-match">一致度 ' + primaryPct + '%</div>';

  var descHtml = '';
  var lines = primary.talent.desc.split('\n');
  lines.forEach(function(line) {
    if (line.trim()) descHtml += '<p>' + line + '</p>';
  });
  resultDesc.innerHTML = descHtml;

  var secondary = result.secondary;
  var secondaryPct = Math.round(secondary.similarity * 100);
  if (secondary.talent.id === primary.talent.id) {
    subResult.innerHTML = '';
  } else {
    subResult.innerHTML = '<div class="sub-label">次に近いタイプ</div>'
      + '<div class="sub-type">' + secondary.talent.type + '（' + secondary.talent.name + '）</div>'
      + '<div class="sub-match">一致度 ' + secondaryPct + '%</div>';
  }

  var norm = result.norm;
  var gridHtml = '';
  for (var pi = 0; pi < PARAMS.length; pi++) {
    var p = PARAMS[pi];
    var val = norm[p.id];
    gridHtml += '<div class="param-item">'
      + '<div class="param-icon">' + p.icon + '</div>'
      + '<div class="param-name">' + p.name + '</div>'
      + '<div class="param-val">' + val + '</div>'
      + '<div class="param-bar"><div class="param-fill" style="width:' + val + '%"></div></div>'
      + '</div>';
  }
  paramsGrid.innerHTML = gridHtml;

  drawRadar(norm);

  lastResult = {
    type: primary.talent.type,
    name: primary.talent.name,
    image: primary.talent.image,
    matchPct: primaryPct,
    talent: primary.talent,
    norm: norm
  };

  showScreen('result');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function drawRadar(norm) {
  var canvas = radarCanvas;
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  var cx = w / 2, cy = h / 2;
  var radius = Math.min(cx, cy) * 0.75;
  var count = PARAMS.length;
  var angleStep = (Math.PI * 2) / count;
  var startAngle = -Math.PI / 2;

  var gridLevels = [20, 40, 60, 80, 100];
  ctx.strokeStyle = 'rgba(45,27,78,0.12)';
  ctx.lineWidth = 1;
  gridLevels.forEach(function(level) {
    var r = radius * level / 100;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  ctx.strokeStyle = 'rgba(45,27,78,0.15)';
  ctx.lineWidth = 1;
  for (var i = 0; i < count; i++) {
    var angle = startAngle + angleStep * i;
    var x = cx + radius * Math.cos(angle);
    var y = cy + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  var font = '13px ' + getComputedStyle(document.body).fontFamily;
  for (var i = 0; i < count; i++) {
    var angle = startAngle + angleStep * i;
    var labelR = radius + 30;
    var x = cx + labelR * Math.cos(angle);
    var y = cy + labelR * Math.sin(angle);
    ctx.fillStyle = 'rgba(45,27,78,0.7)';
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(PARAMS[i].icon + PARAMS[i].name, x, y);
  }

  var dataPoints = [];
  for (var i = 0; i < count; i++) {
    var val = norm[PARAMS[i].id] || 0;
    var r = radius * val / 100;
    var angle = startAngle + angleStep * i;
    dataPoints.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle)
    });
  }

  ctx.beginPath();
  dataPoints.forEach(function(pt, idx) {
    if (idx === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(133,130,251,0.25)';
  ctx.fill();

  ctx.strokeStyle = 'rgba(133,130,251,0.8)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  dataPoints.forEach(function(pt) {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#8582fb';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
}

var TYPE_COLORS = {
  '\uD83D\uDD25 \u60C5\u71B1\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC': ['#A8E6CF','#80CBC4'],
  '\uD83C\uDFB6 \u30CF\u30C3\u30D4\u30FC\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8': ['#E8E0F0','#D1C4E9'],
  '\uD83D\uDC51 \u500B\u6027\u6D3E\u30A8\u30F3\u30BF\u30FC\u30C6\u30A4\u30CA\u30FC': ['#EF5350','#C62828'],
  '\u26A1 \u30E0\u30FC\u30C9\u30E1\u30FC\u30AB\u30FC': ['#FFD54F','#F9A825'],
  '\uD83E\uDEE7 \u30D2\u30FC\u30EA\u30F3\u30B0\u30BF\u30A4\u30D7': ['#4FC3F7','#0288D1'],
  '\uD83C\uDFAE \u308F\u304F\u308F\u304F\u30D7\u30EC\u30A4\u30E4\u30FC': ['#FF8A65','#E64A19'],
  '\uD83D\uDEE0\uFE0F \u30DE\u30EB\u30C1\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC': ['#90A4AE','#546E7A'],
  '\uD83C\uDF02 \u30AE\u30E3\u30C3\u30D7\u7CFB\u30DF\u30B9\u30C6\u30EA\u30A2\u30B9': ['#5C6BC0','#1A237E'],
  '\uD83C\uDFA8 \u30AB\u30E9\u30D5\u30EB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8': ['#FF7043','#AB47BC'],
  '\uD83C\uDFAF \u30AF\u30FC\u30EB\u30ED\u30C3\u30AF\u30AA\u30F3': ['#26C6DA','#00838F'],
  '\uD83C\uDF1F \u30DF\u30EA\u3061\u3083\u3093': ['#CE93D8','#7B1FA2']
};

function getXText() {
  if (!lastResult) return '';
  return '\uD83C\uDF08 Milli Spectrum\n\n\u3042\u306A\u305F\u306E\u4E2D\u306B\u3042\u308B\u3001\u30DF\u30EA\u30D7\u30ED\u306E\u8272\u3092\u898B\u3064\u3051\u3088\u3046\u3002\n\n\u79C1\u306F\u300C' + lastResult.type + '\u300D\u3067\u3057\u305F\uFF01\n\n\u3042\u306A\u305F\u306F\u3069\u306E\u30BF\u30A4\u30D7\u306B\u306A\u308B\uFF1F\u2728\n\n#\u30DF\u30EA\u30D7\u30ED #MilliGames #MilliSpectrum';
}

function getShortDesc(desc) {
  var p = desc.split('\n');
  var lines = [];
  for (var i = 0; i < p.length && lines.length < 3; i++) {
    var t = p[i].trim();
    if (t) lines.push(t);
  }
  return lines;
}

function generateShareImage() {
  if (!lastResult) return Promise.reject('no result');
  var r = lastResult;
  var W = 360, H = 520;
  var scale = 2;
  var cvs = elShareCanvas;
  cvs.width = W * scale;
  cvs.height = H * scale;
  var ctx = cvs.getContext('2d');
  ctx.scale(scale, scale);

  return new Promise(function(resolve) {
    var img = new Image();
    img.onload = drawImage;
    img.onerror = drawImage;
    img.src = '../images/talents/' + r.image;

    function drawImage() {
      var colors = TYPE_COLORS[r.type] || ['#1a0a2e', '#2d1b4e'];

      var grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(1, colors[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // border glow
      ctx.shadowColor = 'rgba(255,255,255,0.15)';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 2;
      ctx.strokeRect(6, 6, W - 12, H - 12);
      ctx.shadowBlur = 0;

      // title
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('\uD83C\uDF08 Milli Spectrum', W / 2, 16);

      // talent image
      var imgW = 120, imgH = 120;
      var imgX = (W - imgW) / 2, imgY = 44;
      if (img.width > 0 && img.height > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(imgX + imgW / 2, imgY + imgH / 2, imgW / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, imgX, imgY, imgW, imgH);
        ctx.restore();
      }

      // "あなたのタイプは"
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '12px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      var yPos = imgY + imgH + 10;
      ctx.fillText('\u3042\u306A\u305F\u306E\u30BF\u30A4\u30D7\u306F', W / 2, yPos);

      // type name (large)
      yPos += 20;
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 20px -apple-system, sans-serif';
      ctx.fillText(r.type, W / 2, yPos);

      // description (2-3 lines)
      var descLines = getShortDesc(r.talent.desc);
      yPos += 30;
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.font = '11px -apple-system, sans-serif';
      for (var di = 0; di < descLines.length; di++) {
        ctx.fillText(descLines[di], W / 2, yPos);
        yPos += 16;
      }

      // divider
      yPos += 6;
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(40, yPos);
      ctx.lineTo(W - 40, yPos);
      ctx.stroke();

      // "あなたのミリプロ成分"
      yPos += 10;
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '11px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('\u3042\u306A\u305F\u306E\u30DF\u30EA\u30D7\u30ED\u6210\u5206', W / 2, yPos);

      // top 4 parameters
      var paramEntries = [];
      for (var pi = 0; pi < PARAMS.length; pi++) {
        paramEntries.push({
          icon: PARAMS[pi].icon,
          name: PARAMS[pi].name,
          val: r.norm[PARAMS[pi].id] || 0
        });
      }
      paramEntries.sort(function(a, b) { return b.val - a.val; });
      var top4 = paramEntries.slice(0, 4);

      yPos += 20;
      ctx.textBaseline = 'top';
      for (var ti = 0; ti < top4.length; ti++) {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.textAlign = 'left';
        ctx.font = '13px -apple-system, sans-serif';
        ctx.fillText(top4[ti].icon + ' ' + top4[ti].name, 50, yPos);
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'right';
        ctx.font = 'bold 13px -apple-system, sans-serif';
        ctx.fillText(String(top4[ti].val), W - 50, yPos);
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(50, yPos + 17, W - 100, 4);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillRect(50, yPos + 17, (W - 100) * top4[ti].val / 100, 4);
        yPos += 32;
      }

      // footer
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '10px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('Milli Games', W / 2, H - 10);

      cvs.toBlob(function(blob) { resolve(blob); }, 'image/png');
    }
  });
}

function handleSave() {
  generateShareImage().then(function(blob) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'millispectrum_result.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function handleShare() {
  generateShareImage().then(function(blob) {
    var text = getXText();
    var file = new File([blob], 'result.png', { type: 'image/png' });
    if (navigator.share) {
      var data = { title: 'Milli Spectrum', text: text };
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        data.files = [file];
      }
      navigator.share(data);
    } else {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'millispectrum_result.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      try { navigator.clipboard.writeText(text); } catch (e) {}
    }
  });
}

function handlePostX() {
  generateShareImage().then(function(blob) {
    var text = getXText();
    var file = new File([blob], 'result.png', { type: 'image/png' });
    if (navigator.share) {
      var data = { text: text };
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        data.files = [file];
      }
      navigator.share(data);
    } else {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text), '_blank');
    }
  });
}

function startDiagnosis() {
  state.step = 0;
  state.scores = initScores();
  state.answers = [];
  showScreen('question');
  renderQuestion(0);
}

function retryDiagnosis() {
  showScreen('start');
}

elBtnSave.addEventListener('click', handleSave);
elBtnShare.addEventListener('click', handleShare);
elBtnX.addEventListener('click', handlePostX);

showScreen('start');
