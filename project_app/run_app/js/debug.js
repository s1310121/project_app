function renderDebug(data) {
  document.getElementById("debugOutput").textContent =
    JSON.stringify(data, null, 2);
}
