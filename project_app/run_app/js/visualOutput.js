// 人体モデル表示（色付き）
function renderVisual(loads) {
  humanModel.innerHTML = "";

  const max = Math.max(...Object.values(loads));

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
    d.style.background = p[1] > 0 ? getColor(p[1], max) : "#ccc";
    d.textContent = p[0];
    humanModel.appendChild(d);
  });
}
