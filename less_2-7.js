// 7. *Сравнить null и 0. Попробуйте объяснить результат
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null === 0); // false

//0 - число (значение), null - отсутствие значения


// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    return val * power(val, pow - 1);
}

console.log(power(3, 3))