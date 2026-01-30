export function calculateLoads(input) {

  const weight = input.weight;
  const distance = input.distance;
  const fatigue = input.fatigue;

  const gradient =
    input.slopeType === "up" ? input.gradient :
    input.slopeType === "down" ? -input.gradient : 0;

  // 基本負荷
  const L_base = weight * distance;
  const L_total = L_base * (fatigue / 10);

  // 路面係数
  let k_surface = 1.0;
  if (input.surface === "asphalt") {
    k_surface = 1.0;
  }

  // 勾配分解
  const g_up = Math.max(0, gradient);
  const g_down = Math.max(0, -gradient);

  // 関節係数
  let k_hip = 0.30 + 0.02 * g_up;
  let k_knee = 0.45 - 0.01 * g_up + 0.03 * g_down;
  let k_ankle = 0.25 + 0.01 * g_up;

  // 正規化
  const S_sum = k_hip + k_knee + k_ankle;
  k_hip /= S_sum;
  k_knee /= S_sum;
  k_ankle /= S_sum;

  // 関節負荷
  const load_hip = L_base * k_surface * k_hip;
  const load_knee = L_base * k_surface * k_knee;
  const load_ankle = L_base * k_surface * k_ankle;

  // 体節負荷
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
