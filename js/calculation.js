function calculateLoad(data) {

  /* ========= 路面係数 ========= */
  let k_surface = 1.0;

  if (data.surface === "asphalt") {
    k_surface = 1.0;
  }

  /* ========= 勾配係数 ========= */
  let k_gradient = 1.0;

  if (data.slopeType === "up") {
    k_gradient += data.gradient * 0.01;
  } 
  else if (data.slopeType === "down") {
    k_gradient -= data.gradient * 0.005;
  }

  /* ========= 総負荷 ========= */
  const baseLoad =
    data.weight *
    data.distance *
    k_surface *
    k_gradient *
    (1 + data.fatigue * 0.1);

  /* ========= 既存：部位別負荷 ========= */
  const load_trunk = baseLoad * 0.20;
  const load_thigh = baseLoad * 0.25;
  const load_shank = baseLoad * 0.20;
  const load_foot  = baseLoad * 0.10;
  const load_hip   = baseLoad * 0.15;
  const load_knee  = baseLoad * 0.10;

  return {
    input: data,
    totalLoad: baseLoad,
    load_trunk,
    load_thigh,
    load_shank,
    load_foot,
    load_hip,
    load_knee
  };
}
