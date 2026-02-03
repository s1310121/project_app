// 入力値の保存と読み込み
function saveInput() {
  localStorage.setItem("savedInput", JSON.stringify(getInputValues()));
  alert("保存しました");
}

function loadInput() {
  const data = localStorage.getItem("savedInput");
  if (data) return JSON.parse(data);
  return null;
}
