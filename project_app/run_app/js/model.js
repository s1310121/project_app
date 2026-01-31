function renderHumanModel(loads) {
  humanModel.innerHTML = "";
  const max = Math.max(...Object.values(loads));

  function color(v) {
    const r = Math.floor(255 * v / max);
    const g = Math.floor(255 * (1 - v / max));
    return `rgb(${r},${g},0)`;
  }

  const parts = [
    ["頭", 0],
    ["体幹", loads.load_trunk],
    ["股関節", loads.load_hip],
    ["大腿", loads.load_thigh],
    ["膝", loads.load_knee],
    ["下腿", loads.load_shank],
    ["足関節", loads.load_ankle],
    ["足部", loads.load_foot],
    ["腕", 0]
  ];

  parts.forEach(p => {
    const d = document.createElement("div");
    d.className = "part";
    d.style.background = p[1] > 0 ? color(p[1]) : "#ccc";
    d.textContent = p[0];
    humanModel.appendChild(d);
  });
}


