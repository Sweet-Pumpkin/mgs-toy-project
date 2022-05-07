const onChart = document.querySelector('.swiper-slide .box .graph');
const offChart = document.querySelector('.chart .close');
const chartBox = document.querySelector('.chart');

let chartState = false;

function setChart() {
  chartState = !chartState;
  if (chartState === true) {
    chartBox.style.transform = "translateY(0px)";
  } else {
    chartBox.style.transform = "translateY(736px)";
  }
}

onChart.addEventListener("click", setChart);
offChart.addEventListener("click", setChart);
