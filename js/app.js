import { calculateLoads } from "./calculation.js";

const inputState = {
  height: 0,
  weight: 0,
  distance: 0,
  time: 0,
  fatigue: 0,
  surface: "asphalt",
  slopeType: "flat",
  gradient: 0,
  ratio: 0
};

// 基本入力
document.getElementById("heightInput").addEventListener("input", e => {
  inputState.height = Number(e.target.value);
});

document.getElementById("weightInput").addEventListener("input", e => {
  inputState.weight = Number(e.target.value);
});

document.getElementById("distanceInput").addEventListener("input", e => {
  inputState.distance = Number(e.target.value);
});

document.getElementById("timeInput").addEventListener("input", e => {
  inputState.time = Number(e.target.value);
});

document.getElementById("fatigueInput").addEventListener("input", e => {
  inputState.fatigue = Number(e.target.value);
});

// 路面×勾配
document.getElementById("surfaceSelect").addEventListener("change", e => {
  inputState.surface = e.target.value;
});

document.getElementById("slopeTypeSelect").addEventListener("change", e => {
  inputState.slopeType = e.target.value;
});

document.getElementById("gradientInput").addEventListener("input", e => {
  inputState.gradient = Number(e.target.value);
});

document.getElementById("ratioInput").addEventListener("input", e => {
  inputState.ratio = Number(e.target.value);
});

// 保存（状態確認用）
document.getElementById("saveBtn").addEventListener("click", () => {
  document.getElementById("outputArea").textContent =
    "保存された入力値\n" + JSON.stringify(inputState, null, 2);
});

// 計算
document.getElementById("calcBtn").addEventListener("click", () => {
  const result = calculateLoads(inputState);

  document.getElementById("outputArea").textContent =
    "計算結果\n" + JSON.stringify(result, null, 2);
});
