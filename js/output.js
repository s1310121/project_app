function renderAll(input, loads) {
  debug.textContent =
    JSON.stringify(input, null, 2) + "\n\n" +
    JSON.stringify(loads, null, 2);
  renderHumanModel(loads);
}
