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
