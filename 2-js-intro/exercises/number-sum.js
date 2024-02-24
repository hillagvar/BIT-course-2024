/*
Suskaiciuoti skaiciu suma intervale (imtinai)
pvz: 0..4 -> 10
*/

let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);
}

console.log("SUM:", sum);

console.clear();

const min = 0;
const max = 100;
let sum2 = 0;

for (let i = min; i <= max; i++) {
    sum2 += i;
}

console.log("SUM2:", sum2);

function sumBetween(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }

    // return `Sum between ${min} and ${max} is ${total}.`;
    return total;
}

// console.log(sumBetween(0, 4));
// console.log(sumBetween(0, 10));
// console.log(sumBetween(13, 15));
// console.log(sumBetween(0, 100));
// console.log(sumBetween(0, 1000));
// console.log(sumBetween(0, 10_000));
// console.log(sumBetween(0, 100_000));
// console.log(sumBetween(0, 1000_000));
// console.log(sumBetween(0, 10_000_000));
// console.log(sumBetween(0, 100_000_000));
// console.log(sumBetween(0, 1000_000_000));
// console.log(sumBetween(0, 10_000_000_000));

function correctBetween(max) {
    return (max * (max + 1)) / 2;
}

console.log(correctBetween(1));
console.log(correctBetween(10));
console.log(correctBetween(100));
console.log(correctBetween(1000));
console.log(correctBetween(10_000));
console.log(correctBetween(100_000));
console.log(correctBetween(1000_000));
console.log(correctBetween(10_000_000));
console.log(correctBetween(100_000_000));
console.log(correctBetween(1000_000_000));
console.log(correctBetween(10_000_000_000));

// ND: padaryti funkcija su min max;

console.clear();

const marks = [10, 2, 8, 4, 6, 10];

let sum3 = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, marks[i]);

    sum3 += marks[i];
}

console.log("SUM:", sum3, "AVERAGE:", sum3 / marks.length);