const watchs = document.querySelectorAll('#watch');

function setWatch() {
  watchs.forEach(watch => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    watch.innerText = `${hours}:${minutes}`
  })
}

setWatch();
setInterval(setWatch, 1000);