let savedData = null;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToStart() {
  showScreen("start-screen");
}

function goToInput() {
  showScreen("input-screen");
  loadSavedBodyData();
}

function goToResult() {
  if (!savedData) {
    alert("先に保存してください");
    return;
  }

  const calcResult = calculateLoads(savedData);
  const debugOutput = createDebugOutput(savedData, calcResult);

  document.getElementById("result-output").textContent =
    JSON.stringify(debugOutput, null, 2);

  showScreen("result-screen");
}

function goToEnd() {
  showScreen("end-screen");
}

function addSegment() {
  const div = document.createElement("div");
  div.className = "segment";
  div.innerHTML = `
    勾配(%): <input type="number" class="gradient">
    割合(%): <input type="number" class="ratio">
  `;
  document.getElementById("segments").appendChild(div);
}

function resetSegments() {
  document.getElementById("segments").innerHTML = "";
}

function saveData() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const distance = Number(document.getElementById("distance").value);
  const time = Number(document.getElementById("time").value);
  const fatigue = Number(document.getElementById("fatigue").value);

  const segmentDivs = document.querySelectorAll(".segment");
  let segments = [];
  let ratioSum = 0;

  segmentDivs.forEach(div => {
    const gradient = Number(div.querySelector(".gradient").value);
    const ratio = Number(div.querySelector(".ratio").value) / 100;
    ratioSum += ratio;

    segments.push({
      surface: "asphalt",
      gradient,
      ratio
    });
  });

  if (Math.abs(ratioSum - 1.0) > 0.001) {
    alert("割合の合計は100%にしてください");
    return;
  }

  savedData = { height, weight, distance, time, fatigue, segments };
  localStorage.setItem("bodyData", JSON.stringify({ height, weight }));

  alert("保存しました");
}

function loadSavedBodyData() {
  const data = localStorage.getItem("bodyData");
  if (!data) return;

  const { height, weight } = JSON.parse(data);
  document.getElementById("height").value = height;
  document.getElementById("weight").value = weight;
}

goToStart();
