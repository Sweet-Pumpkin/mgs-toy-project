const Arrows = document.querySelectorAll('#Arrow');
const Scrolls = document.querySelectorAll('.scroll');
const Receipt = document.querySelector('#receipt');
const subReceipts = document.querySelectorAll('#subReceipt');

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
    Receipt.style.height = "552px";
    subReceipts.forEach(subReceipt => {
      subReceipt.style.height = "552px"
    });
  } else {
    Arrows.forEach(Arrow => {
      Arrow.style.transform = "scaleY(1)";
    });
    Scrolls.forEach(Scroll => {
      Scroll.style.top = "297px";
    });
    Receipt.style.height = "305px";
    subReceipts.forEach(subReceipt => {
      subReceipt.style.height = "305px"
    });
  }
}

Arrows.forEach(Arrow => {
  Arrow.addEventListener("click", setUp);
});