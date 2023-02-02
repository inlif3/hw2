// Задание 1

let password = 'пароль';
let answerUser = prompt('Введите пароль');

if (answerUser === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

const c = prompt('Введите число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 3

const d = prompt('Введите число');
const e = prompt('Введите число');
if (d > 100 || e > 100 ) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 4

let a = Number('2');
let b = Number('3');
alert(a + b);

// Задание 5

let MonthNumber = 12;

switch (MonthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
    break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;

    default: 
        console.log(MonthNumber > 13);
    break;
}
