fetch("./json/list-02.json")
.then((res) => {
  return res.json()
})
.then((obj) => {
  List2(obj);
})

  function List2(obj) {

    // 날짜 배열 추출
    const date = obj.map(v => v.date);
    const arr = new Array(date);
    const arrZero = arr[0];
    const arrUni = arrZero.filter((val, idx) => {
      return arrZero.indexOf(val) === idx;
    })
    const arrSorts = arrUni.reverse();
    for (let i = 0; i < arrSorts.length; i++) {
      const D = arrSorts[i]; // 날짜 추출

      // 지출 합산 & 날짜 표시 추출
      const ulEls = document.querySelectorAll('#subReceipt');
      ulEls.forEach(ulEl => {
        const dataWrap = document.createElement('div');
        const dateName = document.createElement('span');
        dateName.className = "dateName";
        dateName.textContent = D;
    
        const plusPrice = document.createElement('span');
        plusPrice.className ="plusPrice";
    
        const DPrice = obj.map(
          v => v.date === D && v.inOut === 'out' ? v.price : null)
          .reduce((a, b) => {return a + b}, 0
        );
        
        const changeDPrice = DPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        plusPrice.textContent = `${changeDPrice}원 지출`;
        
        ulEl.appendChild(dataWrap);
        dataWrap.appendChild(dateName);
        dataWrap.appendChild(plusPrice);
  
        for (let i = 0; i < obj.length; i++) {
          const date = obj[i].date;
          const inOut = obj[i].inOut;
          const item = obj[i].item;
          const price = obj[i].price;
          const changePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
          if (date === D) {
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
      })
    }
  }