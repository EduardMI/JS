//Изначально незнал как сделать, в интернете много решений и зачастую они очень умные для меня.
// Поэтому за основу взял ваш вариант, и чтобы не было чистого копипаста, немного изменил вариант решения для понимая и операций
//Из найденого понравился этот вариант, но не сильно понял медо parseInt http://jsfiddle.net/4Ap4M/


const field = document.querySelector('.field');

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

let isBlack = false;

for (let i = 0; i < 10; i++) {
    isBlack = (i % 2 === 1) ? false : true;
    if ((i === 0) || (i === 9)) {
        for (let y = 0; y < 8; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('letter');
            cell.textContent = arr[y];
            field.appendChild(cell)
        }
    }
    else {
        for (let j = 0; j < 8; j++) {
            const cellGame = document.createElement('div');
            cellGame.classList.add('cell');
            cellGame.classList.add(isBlack ? 'w' : 'b');
            isBlack = !isBlack;
            field.appendChild(cellGame);

        }
    }
}

const colNumber = document.querySelectorAll('.colNumber')

colNumber.forEach(el => {
    for (let y = 0; y < 8; y++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('letter');
        cell.textContent = y + 1;
        el.appendChild(cell);
    }
});










