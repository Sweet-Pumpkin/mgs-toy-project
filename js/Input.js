const inputEl = document.getElementById("inputEl");
const pushValue =document.querySelector(".MoneyBox");


function setInputEl(event) {
  const num = event.target.value;
  const changeNum = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  pushValue.innerHTML = `${changeNum}원`;
}

if (inputEl) {
  inputEl.addEventListener("input", setInputEl)
}