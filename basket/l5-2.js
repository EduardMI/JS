const basket = document.querySelector('.basket');

let shoppingCart = {
    'tovar1': 25,
    'tovar2': 48,
    'tovar3': 8,
    'tovar4': 58,
    'tovar5': 86
}

// let shoppingCart = {}


function totalPrice(bascet) {
    let arrPrice = Object.values(bascet);
    let result = arrPrice.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result;
}

function totalQuanity(bascet) {
    let arr = Object.values(bascet);
    return arr.length;
}


function drawBasket(cart) {
    basket.textContent = '';
    const p = document.createElement('p');
    if (totalQuanity(cart) !== 0) {
        p.textContent = `В корзине товаров: ${totalQuanity(cart)}. На сумму: ${totalPrice(cart)}`;
        p.classList.add('pBascet');
    } else {
        p.textContent = 'Корзина пуста';
        p.classList.add('pBascet');
    }
    basket.appendChild(p);
}

drawBasket(shoppingCart);