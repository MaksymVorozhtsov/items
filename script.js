const itemsWrap = document.querySelector('.items');
const NUMOFITEMS = 10;

for (let i=1; i<=NUMOFITEMS; i++) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.setAttribute('data-num', i);
  item.innerHTML = '<h3 class="title title--white">Item</h3><p>Pos:' + i +'</p>';
  itemsWrap.appendChild(item);
}


const itemsAll = document.querySelectorAll('.item');

const getNum = function() {
  alert('Kliknięto w pozycję ' + this.getAttribute('data-num'));
}

for (let j=0; j<itemsAll.length; j++) {
  itemsAll[j].addEventListener('click', getNum)
}