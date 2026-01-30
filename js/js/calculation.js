function calculateLoads(input) {
  const { weight, distance, fatigue, segments } = input;

  let totalBaseLoad = 0;

  let load_hip = 0;
  let load_knee = 0;
  let load_ankle = 0;

  segments.forEach(seg => {
    const segmentDistance = distance * seg.ratio;
    const L_base = weight * segmentDistance;
    totalBaseLoad += L_base;

    const k_surface = 1.0;

    const g_up = Math.max(0, seg.gradient);
    const g_down = Math.max(0, -seg.gradient);

    let k_hip = 0.30 + 0.02 * g_up;
    let k_knee = 0.45 - 0.01 * g_up + 0.03 * g_down;
    let k_ankle = 0.25 + 0.01 * g_up;

    const sum = k_hip + k_knee + k_ankle;
    k_hip /= sum;
    k_knee /= sum;
    k_ankle /= sum;

    load_hip += L_base * k_surface * k_hip;
    load_knee += L_base * k_surface * k_knee;
    load_ankle += L_base * k_surface * k_ankle;
  });

  const L_total = totalBaseLoad * (fatigue / 10);

  const load_trunk = L_total * 0.25;
  const load_thigh = load_hip + 0.5 * load_knee;
  const load_shank = 0.5 * load_knee + load_ankle;
  const load_foot = load_ankle;

  return {
    load_trunk,
    load_thigh,
    load_shank,
    load_foot,
    load_hip,
    load_knee,
    load_ankle
  };
}
