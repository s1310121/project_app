let savedData = null;

function saveData() {
  savedData = {
    height: Number(document.getElementById("height").value),
    weight: Number(document.getElementById("weight").value),
    distance: Number(document.getElementById("distance").value),
    time: Number(document.getElementById("time").value),
    fatigue: Number(document.getElementById("fatigue").value),

    surface: document.getElementById("surfaceType").value,
    slopeType: document.getElementById("slopeType").value,
    gradient: Number(document.getElementById("gradient").value),
    ratio: Number(document.getElementById("ratio").value)
  };
}

function showResult() {
  document.getElementById("inputScreen").style.display = "none";
  document.getElementById("outputScreen").style.display = "block";

  const loads = calculateLoads(savedData);
  debugOutput(savedData, loads);
  drawHumanModel(loads);
}

function goBack() {
  document.getElementById("outputScreen").style.display = "none";
  document.getElementById("inputScreen").style.display = "block";
}
