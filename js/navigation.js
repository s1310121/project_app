// 画面切替制御
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goInput() { showScreen("screen-input"); }
function goOutput() { 
  const input = getInputValues();
  const sum = input.surfaces.reduce((a, b) => a + b.ratio, 0);
  if (Math.abs(sum - 1) > 0.01) {
    alert("割合の合計を100%にしてください");
    return;
  }
  const loads = calculateLoads(input);
  renderDebug(input, loads);
  renderVisual(loads);
  showScreen("screen-output");
}
function goEnd() { showScreen("screen-end"); }
