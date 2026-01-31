function renderHumanModel(loads) {
  humanModel.innerHTML = "";

  const max = Math.max(...Object.values(loads));

  function getPartColor(value) {
    return value > 0 ? getColor(value, max) : "#ccc";
  }

  // 頭
  const headDiv = document.createElement("div");
  headDiv.className = "part head";
  headDiv.style.background = "#ccc";
  headDiv.textContent = "頭";
  humanModel.appendChild(headDiv);

  // 腕
  const armsDiv = document.createElement("div");
  armsDiv.className = "arms";
  ["左腕", "右腕"].forEach(a => {
    const armDiv = document.createElement("div");
    armDiv.className = "part arm";
    armDiv.style.background = "#ccc"; // 負荷なし
    armDiv.textContent = a;
    armsDiv.appendChild(armDiv);
  });
  humanModel.appendChild(armsDiv);

  // 体幹
  const torsoDiv = document.createElement("div");
  torsoDiv.className = "part torso";
  torsoDiv.style.background = getPartColor(loads.load_trunk);
  torsoDiv.textContent = "体幹";
  humanModel.appendChild(torsoDiv);

  // 股関節
  const hipDiv = document.createElement("div");
  hipDiv.className = "part joint";
  hipDiv.style.background = getPartColor(loads.load_hip);
  hipDiv.textContent = "股関節";
  humanModel.appendChild(hipDiv);

  // 大腿
  const thighDiv = document.createElement("div");
  thighDiv.className = "part torso";
  thighDiv.style.background = getPartColor(loads.load_thigh);
  thighDiv.textContent = "大腿";
  humanModel.appendChild(thighDiv);

  // 膝
  const kneeDiv = document.createElement("div");
  kneeDiv.className = "part joint";
  kneeDiv.style.background = getPartColor(loads.load_knee);
  kneeDiv.textContent = "膝";
  humanModel.appendChild(kneeDiv);

  // 下腿
  const shankDiv = document.createElement("div");
  shankDiv.className = "part torso";
  shankDiv.style.background = getPartColor(loads.load_shank);
  shankDiv.textContent = "下腿";
  humanModel.appendChild(shankDiv);

  // 足関節
  const ankleDiv = document.createElement("div");
  ankleDiv.className = "part joint";
  ankleDiv.style.background = getPartColor(loads.load_ankle);
  ankleDiv.textContent = "足関節";
  humanModel.appendChild(ankleDiv);

  // 足
  const footDiv = document.createElement("div");
  footDiv.className = "part foot";
  footDiv.style.background = getPartColor(loads.load_foot);
  footDiv.textContent = "足";
  humanModel.appendChild(footDiv);
}
