const catalog = document.querySelector('.catalog');
const basket = document.querySelector('.basket');

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

products.push(new Product('Salt', 10));
products.push(new Product('Sugar', 30));
products.push(new Product('Pepper', 50));

drawCatalog();
drawBascet();