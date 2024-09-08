'use strict'

// № 1
function myFunction() {
    console.log("Salom Astrum");
}

myFunction();

// № 2
function youName(ism) {
    console.log(`Salom, ${ism}`);
}

const name = prompt("Ismingizni kiriting");

youName(name);

// № 3
function numbers(num1, num2) {
    if (num1 > num2) {
        console.log(`katta son, ${num1}`);
    }
    if (num1 < num2) {
        console.log(`katta son, ${num2}`);
    }
}

let number1 = prompt("1chi sonni kiriting");
let number2 = prompt("2chi sonni kiriting");
numbers(number1, number2);

// № 4
function faktorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * faktorial(num - 1);
}

let fakto = +prompt("Son kiriting");
console.log("Faktorial", faktorial(fakto));

// № 5
function square(num) {
    console.log("Kvadrat", num * num);
}

let squ = +prompt("Kvadrat uchun son kiriting");
square(squ);

// № 6
function cube(num) {
    console.log("Kub", num * num * num);
}

let cub = +prompt("Kub uchun son kiriting");
cube(cub);

// № 7
function bigNumber(numbers1) {
    return Math.max(...numbers1);
}

let numbers1 = [2, 4, 5, 30, 54, 56, 99, 100, 0, 3, 6];
console.log("Eng katta son", bigNumber(numbers1));

// № 8
function texts(text) {
    let longest = text[0];
    for (let i = 1; i < text.length; i++) {
        if (text[i].length > longest.length) {
            longest = text[i];
        }
    }
    return longest;
}

let texts1 = ["Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"];
console.log("Eng uzuni", texts(texts1));

// № 9
function smallNumber(numbers2) {
    return Math.min(...numbers2);
}

let numbers2 = [2, 4, 5, 30, 54, 56, 99, 100, 0, 3, 6];
console.log("Eng kichik son", smallNumber(numbers2));

// № 10
function textsS(text) {
    let shortest = text[0];
    for (let i = 1; i > text.length; i++) {
        if (text[i].length < shortest.length) {
            shortest = text[i];
        }
    }
    return shortest;
}

let texts2 = ["Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"];
console.log("Eng qisqasi", textsS(texts2));