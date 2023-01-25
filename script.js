// Задание 1

let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2

let iphone;
iphone = 2007;
alert(iphone);

// Задание 3

 let creator;
 creator = 'Brandan';
 alert(creator);

 // Задание 4

 let a1, b1;
 a1 = 10;
 b1 = 2;
 alert(a1*b1);
 alert(a1+b1);
 alert(a1-b1);
 alert(a1/b1);

 // Задание 5

 let a2, b2;
 a2 = 2;
 b2 = 5;
 let result;
 alert(result=a2**b2);

 // Задание 6

 let a3, b3;
 a3 = 9;
 b3 = 2;
 alert(a3%b3);

 // Задани 7

 let num = 1;
 num += 5;
 num -= 3;
 num *= 7;
 num /= 3;
 num ++;
 num --;
 alert(num);

 // Задание 8

 let age = prompt('Сколько Вам лет?');
 alert(age);

// Задание 9

let user = { name: 'Alex', age: 30, isAdmin: true };
user['city of residence'] = 'Moscow';
user.age = 35;
delete ['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10

let name = prompt('Введите ваше имя');

alert("Привет, " + name + "!");