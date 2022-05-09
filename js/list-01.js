fetch("./json/list-01.json")
.then((res) => {
  return res.json()
})
.then((obj) => {
  List(obj);
})

function List(obj) {
  
  function forList(D1, D2) {
    const ulEl = document.querySelector('.receipt');
    const dataWrap = document.createElement('div');
    const dateName = document.createElement('span');
    dateName.className = "dateName";
    dateName.textContent = D2;

    const plusPrice = document.createElement('span');
    plusPrice.className ="plusPrice";

    const D1Price = obj.map(
      v => v.date === D1 && v.inOut === 'out' ? v.price : null)
      .reduce((a, b) => {return a + b}, 0
    );
    
    const changeD1Price = D1Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    plusPrice.textContent = `${changeD1Price}원 지출`;
    
    ulEl.appendChild(dataWrap);
    dataWrap.appendChild(dateName);
    dataWrap.appendChild(plusPrice);

    for (let i = 0; i < obj.length; i++) {
      const date = obj[i].date;
      const inOut = obj[i].inOut;
      const item = obj[i].item;
      const price = obj[i].price;
      const changePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      if (date === D1) {
        const liItem = document.createElement('div');
        const liPrice = document.createElement('div');
        const listWrap = document.createElement('li');

        liItem.textContent = `${item}`;

        if (inOut === 'out') {
          liPrice.classList.add('out');
          
          liPrice.textContent = `${changePrice}원`; 
        } else {
          liPrice.classList.add('in');
          liPrice.textContent = `${changePrice}원`; 
        }
        ulEl.appendChild(listWrap)
        listWrap.appendChild(liItem);
        listWrap.appendChild(liPrice);
      }
    }
  }
  forList("2022.05.06", "오늘");
  forList("2022.05.05", "어제");
  forList("2022.05.04", "2일 전");
  forList("2022.05.03", "3일 전");
  forList("2022.05.02", "5월 2일");
  forList("2022.05.01", "5월 1일");
}

  
