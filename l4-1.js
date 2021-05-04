//'use strict'
let userNumber1 = 1900;
let userNumber2 = 920;
let userNumber3 = 84;
let userNumber4 = 7;

function TransformNumber(number) {
    if (number > 999) {
        console.log('Число больше 999');
        return this;
    }
    else {
        this.units = number % 10;
        this.tens = Math.floor(number / 10 % 10);
        this.hundreds = Math.floor(number / 100 % 10);
    }
}

let a = new TransformNumber(userNumber1);
console.log(a);

// let b = new TransformNumber(userNumber2);
// console.log(b);

// let c = new TransformNumber(userNumber3);
// console.log(c);

// let d = new TransformNumber(userNumber4);
// console.log(d);