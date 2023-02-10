// Задание 1

let numb = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numb.length; i++) {
    if (numb[i] == 10) break;
    console.log(numb[i]);
}

// Задание 2

let numbs = [1, 5, 4, 10, 0, 3];

for (let elem of numbs) {
    if (numbs[elem] === 4) {
        console.log(elem);

    }
}

// Задание 3

let arr = [1, 3, 5, 10, 20];

arr = arr.join(' ');

console.log(arr);