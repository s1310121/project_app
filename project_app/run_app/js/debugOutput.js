// 数値を出力画面に表示
function renderDebug(input, loads) {
  debug.textContent =
    "【入力値】\n" + JSON.stringify(input, null, 2) +
    "\n\n【計算結果】\n" + JSON.stringify(loads, null, 2);
}
