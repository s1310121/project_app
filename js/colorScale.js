function getColor(value, max) {
  if (max === 0) return "#ffffcc";

  const ratio = value / max;

  // 黄色 → 赤
  const r = 255;
  const g = Math.floor(255 * (1 - ratio));
  const b = 0;

  return `rgb(${r}, ${g}, ${b})`;
}
