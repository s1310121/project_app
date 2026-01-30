function drawHumanModel(loads) {
  const canvas = document.getElementById("humanCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxLoad = Math.max(...Object.values(loads));

  function color(load) {
    const intensity = load / maxLoad;
    return `rgb(255, ${255 - 200 * intensity}, ${255 - 200 * intensity})`;
  }

  // head
  ctx.fillStyle = "#ccc";
  ctx.beginPath();
  ctx.arc(150, 40, 20, 0, Math.PI * 2);
  ctx.fill();

  // trunk
  ctx.fillStyle = color(loads.load_trunk);
  ctx.fillRect(130, 60, 40, 80);

  // arms
  ctx.fillStyle = "#ccc";
  ctx.fillRect(90, 60, 40, 80);
  ctx.fillRect(170, 60, 40, 80);

  // thigh
  ctx.fillStyle = color(loads.load_thigh);
  ctx.fillRect(130, 140, 40, 80);

  // shank
  ctx.fillStyle = color(loads.load_shank);
  ctx.fillRect(130, 220, 40, 80);

  // foot
  ctx.fillStyle = color(loads.load_foot);
  ctx.fillRect(130, 300, 50, 20);
}
