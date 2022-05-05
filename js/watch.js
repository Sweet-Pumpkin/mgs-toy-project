const watch = document.querySelector('#watch');

function setWatch() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  watch.innerText = `${hours}:${minutes}`
}

setWatch();
setInterval(setWatch, 1000);