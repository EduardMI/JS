let basket = [25, 48, 4, 58, 86];

function countBasketPrice(arr) {
    let summ = 0;
    for (let i in arr) {
        summ += arr[i]
    } return summ;
}

console.log(countBasketPrice(basket))