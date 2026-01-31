function getInputValues() {
  const surfaces = [];
  const rows = document.querySelectorAll(".row");

  document.querySelectorAll(".surface").forEach((s, i) => {
    const terrain = document.querySelectorAll(".terrain")[i].value;
    const grad = Number(document.querySelectorAll(".gradient")[i].value);
    const ratio = Number(document.querySelectorAll(".ratio")[i].value);

    let gradient = grad;
    if (terrain === "down") gradient = -grad;

    surfaces.push({
      surface: s.value,
      gradient: gradient,
      ratio: ratio / 100
    });
  });

  return {
    height: Number(height.value),
    weight: Number(weight.value),
    distance: Number(distance.value),
    time: Number(time.value),
    fatigue: Number(fatigue.value),
    surfaces
  };
}
