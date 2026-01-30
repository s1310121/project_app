let surfaceList = [];
let savedInput = null;

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToInput() { show("screen-input"); }
function goToOutput() { show("screen-output"); outputResult(); }
function goToEnd() { show("screen-end"); }

function addSurface() {
  const g = Number(document.getElementById("gradient").value);
  const r = Number(document.getElementById("ratio").value);
  surfaceList.push({ gradient: g, ratio: r });
  updateSurfaceList();
}

function resetSurface() {
  surfaceList = [];
  updateSurfaceList();
}

function updateSurfaceList() {
  const ul = document.getElementById("surfaceList");
  ul.innerHTML = "";
  surfaceList.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `勾配 ${s.gradient}% / 割合 ${s.ratio}%`;
    ul.appendChild(li);
  });
}

function saveInput() {
  savedInput = {
    height: Number(height.value),
    weight: Number(weight.value),
    distance: Number(distance.value),
    time: Number(time.value),
    fatigue: Number(fatigue.value),
    surfaceList
  };
}

function outputResult() {
  if (!savedInput) return;
  const loads = calculateLoads(savedInput);
  renderDebug({ ...savedInput, ...loads });
  renderHumanModel(loads);
}
