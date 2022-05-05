fetch("./json/list-01.json")
.then((res) => {
  return res.json()
})
.then((obj) => {
  List(obj);
})

function List(obj) {
  const ulEl = document.querySelector('.receipt');
  for (let i = 0; i < obj.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${obj[i].item} : ₩${obj[i].price}원`; 
    ulEl.appendChild(li);
  }
}