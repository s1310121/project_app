// 負荷値を色に変換
function getColor(value, max) {
  // 赤(高負荷) → 黄(低負荷)
  const r = Math.floor(255 * value / max);
  const g = Math.floor(255 * (1 - value / max));
  return `rgb(${r},${g},0)`;
}
