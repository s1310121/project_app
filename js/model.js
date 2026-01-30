function loadToColor(value, max) {
  const ratio = max === 0 ? 0 : value / max;
  const r = 255;
  const g = Math.floor(255 * (1 - ratio));
  return `rgb(${r},${g},0)`; // 赤→黄色
}

function renderHumanModel(loads) {
  const container = document.getElementById("humanModel");
  container.innerHTML = "";

  const jointMax = Math.max(loads.load_hip, loads.load_knee, loads.load_ankle);
  const segMax = Math.max(
    loads.load_trunk,
    loads.load_thigh,
    loads.load_shank,
    loads.load_foot
  );

  const parts = [
    { cls: "head", label: "頭", fixed: true },
    { cls: "arm", label: "腕", fixed: true },
    { cls: "trunk", label: "体幹", v: loads.load_trunk, m: segMax },
    { cls: "joint", label: "股", v: loads.load_hip, m: jointMax },
    { cls: "thigh", label: "大腿", v: loads.load_thigh, m: segMax },
    { cls: "joint", label: "膝", v: loads.load_knee, m: jointMax },
    { cls: "shank", label: "下腿", v: loads.load_shank, m: segMax },
    { cls: "joint", label: "足関節", v: loads.load_ankle, m: jointMax },
    { cls: "foot", label: "足部", v: loads.load_foot, m: segMax }
  ];

  parts.forEach(p => {
    const d = document.createElement("div");
    d.className = `part ${p.cls}`;
    if (!p.fixed) d.style.background = loadToColor(p.v, p.m);
    d.textContent = p.label;
    container.appendChild(d);
  });
}
