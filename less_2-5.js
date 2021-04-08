function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Дальше задание №6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return addition(arg1, arg2);
        case 'вычитание':
            return subtraction(arg1, arg2);
        case 'деление':
            return division(arg1, arg2);
        case 'умножение':
            return multiply(arg1, arg2);
    }
}


console.log(mathOperation(4, 5, 'умножение'))