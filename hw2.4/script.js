// Задание 1

let i = 0;

while ( i <= 1 ) {
    console.log('Привет');
    i++;
}

// Задание 2

let a = 1;

while ( a <= 5 ) {
    console.log(a);
    a++;
}

// Задание 3

let b = 7;

while ( b <= 22 ) {
    console.log(b);
    b++;
}

// Задание 4

let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};
for (worker in obj) {
    console.log(`${worker} - зарплата ${obj[worker]} долларов`);
}

// Задание 5

let n;

for ( let n = 1000, num = 0; n > 50; num++ ) {
    n /= 2;
    num++;
    console.log(n);
    console.log(num);
}
