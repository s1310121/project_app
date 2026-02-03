function renderVisual(loads) {
  const debug = document.getElementById("debug");

  let text = "【計算結果】\n";
  Object.entries(loads).forEach(([k, v]) => {
    text += `${k}: ${v}\n`;
  });

  debug.textContent = text;

  initHumanModel();
  renderHumanModel(loads)

}

