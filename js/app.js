document.getElementById("runBtn").addEventListener("click", () => {

  const inputData = {
    height: Number(document.getElementById("height").value),
    weight: Number(document.getElementById("weight").value),
    distance: Number(document.getElementById("distance").value),
    time: Number(document.getElementById("time").value),
    fatigue: Number(document.getElementById("fatigue").value),

    // ★追加
    surface: document.getElementById("surface").value,
    slopeType: document.getElementById("slopeType").value,
    gradient: Number(document.getElementById("gradient").value),
    ratio: Number(document.getElementById("ratio").value)
  };

  // 保存（将来用）
  localStorage.setItem("runInput", JSON.stringify(inputData));

  // 計算
  const result = calculateLoad(inputData);

  // 出力（debug兼用）
  document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);
});
