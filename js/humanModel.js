// humanModel.js
// 人体モデルの形状生成 ＋ 負荷による色付け

let svgRoot = null;

// ===============================
// 人体モデル生成
// ===============================
function initHumanModel() {
  const container = document.getElementById("humanModel");
  container.innerHTML = "";

  container.insertAdjacentHTML("beforeend", `
<svg width="350" height="800" viewBox="0 0 350 800">

<defs>
  <filter id="shadow">
    <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.25"/>
  </filter>
</defs>

<circle id="head" cx="175" cy="80" r="40" fill="#ccc"/>
<rect id="neck" x="155" y="120" width="40" height="30" rx="8" fill="#ccc"/>

<rect id="torso" x="105" y="150" width="140" height="180" rx="20" fill="#ccc"/>
<rect id="pelvis" x="115" y="335" width="120" height="80" rx="18" fill="#ccc"/>

<ellipse id="hip_left" cx="140" cy="390" rx="18" ry="14" fill="#ccc"/>
<ellipse id="hip_right" cx="210" cy="390" rx="18" ry="14" fill="#ccc"/>

<rect id="thigh_left" x="115" y="415" width="50" height="140" rx="12" fill="#ccc"/>
<rect id="thigh_right" x="185" y="415" width="50" height="140" rx="12" fill="#ccc"/>

<ellipse id="knee_left" cx="140" cy="560" rx="16" ry="12" fill="#ccc"/>
<ellipse id="knee_right" cx="210" cy="560" rx="16" ry="12" fill="#ccc"/>

<rect id="shin_left" x="115" y="575" width="50" height="160" rx="12" fill="#ccc"/>
<rect id="shin_right" x="185" y="575" width="50" height="160" rx="12" fill="#ccc"/>

<ellipse id="ankle_left" cx="140" cy="735" rx="16" ry="12" fill="#ccc"/>
<ellipse id="ankle_right" cx="210" cy="735" rx="16" ry="12" fill="#ccc"/>

<polygon id="foot_left" points="115,740 175,740 160,800 130,800" fill="#ccc"/>
<polygon id="foot_right" points="185,740 245,740 230,800 200,800" fill="#ccc"/>

<ellipse id="shoulder_left" cx="105" cy="170" rx="14" ry="14" fill="#ddd"/>
<ellipse id="shoulder_right" cx="245" cy="170" rx="14" ry="14" fill="#ddd"/>

<rect id="upperarm_left" x="70" y="180" width="35" height="140" rx="12" fill="#ddd"/>
<rect id="upperarm_right" x="245" y="180" width="35" height="140" rx="12" fill="#ddd"/>

<ellipse id="elbow_left" cx="87" cy="320" rx="12" ry="12" fill="#ddd"/>
<ellipse id="elbow_right" cx="262" cy="320" rx="12" ry="12" fill="#ddd"/>

<rect id="lowerarm_left" x="70" y="330" width="35" height="140" rx="12" fill="#ddd"/>
<rect id="lowerarm_right" x="245" y="330" width="35" height="140" rx="12" fill="#ddd"/>

<rect id="hand_left" x="65" y="470" width="45" height="60" rx="14" fill="#eee"/>
<rect id="hand_right" x="240" y="470" width="45" height="60" rx="14" fill="#eee"/>

</svg>
  `);

  svgRoot = container.querySelector("svg");
}

// ===============================
// 色スケール
// ===============================
function getColor(value, max) {
  if (max <= 0) return "#ffff99";
  const r = 255;
  const g = Math.floor(255 - 155 * (value / max));
  const b = 0;
  return `rgb(${r},${g},${b})`;
}

// ===============================
// 外部公開：描画関数
// ===============================
function renderHumanModel(loads) {
  if (!svgRoot) return;

  const max = Math.max(
    loads.load_trunk,
    loads.load_hip,
    loads.load_thigh,
    loads.load_knee,
    loads.load_shank,
    loads.load_ankle,
    loads.load_foot
  );

  const map = {
    torso: loads.load_trunk,
    pelvis: loads.load_hip,
    hip_left: loads.load_hip,
    hip_right: loads.load_hip,
    thigh_left: loads.load_thigh,
    thigh_right: loads.load_thigh,
    knee_left: loads.load_knee,
    knee_right: loads.load_knee,
    shin_left: loads.load_shank,
    shin_right: loads.load_shank,
    ankle_left: loads.load_ankle,
    ankle_right: loads.load_ankle,
    foot_left: loads.load_foot,
    foot_right: loads.load_foot
  };

  Object.entries(map).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("fill", getColor(value, max));
  });
}

// ===============================
// グローバル公開
// ===============================
window.initHumanModel = initHumanModel;
window.renderHumanModel = renderHumanModel;

