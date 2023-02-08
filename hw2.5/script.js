// Задание 1

function min(a, b) {
if (a < b) {
    return a;
} else {
    return b;
}
}

console.log((8, 4));
console.log((6, 6));

// Задание 2

function even_odd( number ) {
return number % 2 == 0 ? "Число нечетное" : "Число четное"
}

console.log(even_odd(3));
console.log(even_odd(4));

// Задание 3.1

const square = prompt('Введите число'); 

// Задание 3.2

function squareResoult (square) {
    return square ** 2;
}

console.log(squareResoult(square));

// Задание 4

let answer = prompt('Сколько Вам лет?');

function printMessage () {
    if (answer < 0) 
            console.log('Вы ввели не правильньное значение');

         else if (answer >= 0 && answer < 12) 
                console.log('Привет, друг!');

             else if (answer >= 13) 
                        console.log('Добро пожаловать!');
}
                
printMessage();

// Задание 5

function num(c,e) {
    if (isNaN(c,e)) { 
        return 'Одно или оба значения не являются числом';
    }
    else { return (c * e);
    }
}

console.log(num(8,2));
console.log(num('Не число'));

// Задание 6

 const userNumber = (n) => {
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    else { return `${n} в кубе равняется ${n ** 2}`;
    }
}

console.log( userNumber('пример'));
for(let i = 0; i < 11; i++) {
    console.log(userNumber(i));
}
