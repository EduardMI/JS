let finishNumber = 100;
let count = 0;


function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

while (count <= finishNumber) {
    if (isPrime(count)) {
        console.log(count);
    }
    count++;
}


