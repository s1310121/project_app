// イベントや画面制御の呼び出し
// navigation.js, storage.js, debugOutput.js, visualOutput.js, humanModel.js, colorScale.js すべて利用

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  const saved = loadInput();
  if (saved) {
    height.value = saved.height;
    weight.value = saved.weight;
    distance.value = saved.distance;
    time.value = saved.time;
    fatigue.value = saved.fatigue;
    // surfaces 初期値は残す
  }
});
