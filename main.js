const catalog = document.querySelector('.catalog');
const basket = document.querySelector('.basket');
const popupBasket = document.querySelector('.popupBasket');
const popupAdress = document.querySelector('.popupAdress');

let products = [];
let baskets = [];

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Buy {
    constructor(name, price, quantity = 1 ) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

function drawCatalog(){
    products.forEach(function (elem, i) {
        const html = `<div class='product'><h3>${elem.name}</h3><p>Price:${elem.price}</p><button data-id='${i}'>Buy</button></div>`;
        catalog.insertAdjacentHTML('beforeend', html);
    })
}

function totalQuanity(arr){
    return arr.reduce(function (acc, elem) {
        return acc + elem.quantity;
    }, 0);
}

function totalPrice(arr){
    return arr.reduce(function(acc, elem) {
        return acc + (elem.quantity * elem.price);
    }, 0);
}

function drawBascet() {
    basket.textContent = '';
    const p = document.createElement('p');

    if (baskets.length !== 0) {
        p.textContent = `В корзине ${totalQuanity(baskets)} товаров, на сумму ${totalPrice(baskets)} рублей.`;
    } else {
        p.textContent = 'Корзина пуста';
    }
    basket.appendChild(p);
}

catalog.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        const id = Number(e.target.getAttribute('data-id'));
        const elem = products[id];

        const uniqeId = baskets.findIndex(function(item) {
            return elem.name == item.name; 
        });

        if(uniqeId < 0) {
            baskets.push(new Buy(elem.name, elem.price));
        } else {
            baskets[uniqeId].quantity++;
        }
        drawBascet();
    }
});



function drawFullBasketOnclick(){
    popupBasket.textContent = ''
    popupBasket.style.display = 'block';
    if(baskets.length !== 0) {
        baskets.forEach(function (elem, i){
            const html = `<div data-id="${i}"><h4>${elem.name}</h4><p>Стоимость: ${elem.quantity * elem.price}</p>
            <p><button onclick="lowerOnclick(${i});">-</button>${elem.quantity}<button onclick="addOnclick(${i});">+</button></p>`;
            popupBasket.insertAdjacentHTML('beforeend', html);
        })
        const p = `<p>Общая стоимость: ${totalPrice(baskets)}</p><button onclick="furtherOnclick();">Далее</button>`;
        popupBasket.insertAdjacentHTML('beforeend', p);
        } else {
            const html = 'Корзина пуста';
            popupBasket.insertAdjacentHTML('beforeend', html)
        }
        popupBasket.style.display = 'block';
};

basket.addEventListener('click', drawFullBasketOnclick);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        popupBasket.style.display = 'none';
        popupAdress.style.display = 'none';
    }
});

function furtherOnclick() {
    popupAdress.textContent = '';
    popupBasket.style.display = 'none';
    popupAdress.style.display = 'block';
    const html = `<p>Введите адрес доставки</p><form>
        <fieldset>
          <legend>Контактная информация</legend>
          <p><label for="name">Имя <em>*</em></label><input type="text" id="name"></p>
          <p><label for="adress">Адрес</label><input type="text" id="adress"></p>
        </fieldset>
      <p><input type="submit" value="Отправить"></p>
      </form>`;
    popupAdress.insertAdjacentHTML('beforeend', html);
};

function lowerOnclick(i) {
    if(baskets[i].quantity == 1){
        baskets.splice(i, 1);
    } else {
        baskets[i].quantity--;
    }
    console.log(baskets[i]);
    drawFullBasketOnclick();
}

function addOnclick(i) {
    baskets[i].quantity++;
    console.log(baskets[i]);
    drawFullBasketOnclick();
}

products.push(new Product('Salt', 10));
products.push(new Product('Sugar', 30));
products.push(new Product('Pepper', 50));

drawCatalog();
drawBascet();