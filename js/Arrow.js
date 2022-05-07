const Arrows = document.querySelectorAll('#Arrow');
const Scrolls = document.querySelectorAll('.scroll');
const Receipts = document.querySelectorAll('.receipt')

let up = false;

function setUp() {
  up = !up;
  if (up === true) {
    Arrows.forEach(Arrow => {
      Arrow.style.transform = "scaleY(-1)";
    });
    Scrolls.forEach(Scroll => {
      Scroll.style.top = "50px";
    });
    Receipts.forEach(Receipt => {
      Receipt.style.height = "552px"
    });
  } else {
    Arrows.forEach(Arrow => {
      Arrow.style.transform = "scaleY(1)";
    });
    Scrolls.forEach(Scroll => {
      Scroll.style.top = "297px";
    });
    Receipts.forEach(Receipt => {
      Receipt.style.height = "305px"
    });
  }
}

Arrows.forEach(Arrow => {
  Arrow.addEventListener("click", setUp);
});