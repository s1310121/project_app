function calculateLoads(input) {
  const { weight, distance, fatigue, surfaceList } = input;

  const L_base = weight * distance;
  const L_total = L_base * (fatigue / 10);

  let load_hip = 0;
  let load_knee = 0;
  let load_ankle = 0;

  surfaceList.forEach(s => {
    const g_up = Math.max(0, s.gradient);
    const g_down = Math.max(0, -s.gradient);

    let k_hip = 0.30 + 0.02 * g_up;
    let k_knee = 0.45 - 0.01 * g_up + 0.03 * g_down;
    let k_ankle = 0.25 + 0.01 * g_up;

    const sum = k_hip + k_knee + k_ankle;
    k_hip /= sum;
    k_knee /= sum;
    k_ankle /= sum;

    const r = s.ratio / 100;

    load_hip += L_base * k_hip * r;
    load_knee += L_base * k_knee * r;
    load_ankle += L_base * k_ankle * r;
  });

  return {
    load_trunk: L_total * 0.25,
    load_thigh: load_hip + 0.5 * load_knee,
    load_shank: 0.5 * load_knee + load_ankle,
    load_foot: load_ankle,
    load_hip,
    load_knee,
    load_ankle
  };
}
