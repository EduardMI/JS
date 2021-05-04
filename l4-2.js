let shoppingCart = {
    'tovar1': 25,
    'tovar2': 48,
    'tovar3': 4,
    'tovar4': 58,
    'tovar5': 86
}

function totalPrice(bascet) {
    let arrPrice = Object.values(bascet);
    let result = arrPrice.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result;
}

console.log(totalPrice(shoppingCart))