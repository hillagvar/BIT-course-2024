/*
Perpanaudojamas logikos blokas

function example(parametrai) {
    // 1. parametru validavimas
    // 2. logika
    // 3. rezultato validavimas
    // 4. rezultato grazinimas
}

*/

// DRY

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 13;
const b2 = 13;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

const c1 = 7;
const c2 = 77;
const c3 = 1 + c1 * 2 + c2 * 3 + 3;
console.log(c3);

function empty() {
}

const x1 = empty();
console.log(x1);

function boolFalse() {
    return false;
}

const x2 = boolFalse();
console.log(x2);

function giveMeNumber() {
    return 42069;
}

const x3 = giveMeNumber();
console.log(x3);

function labas(name) {
    return `Labas, as ${name}!`;
}

const x7 = labas("Krabas");
console.log(x7);
const x8 = labas("Jonas");
console.log(x8);
const x9 = labas("Maryte");
console.log(x9);

function dvigubai(number) {
    return number * 2;
}

const x10 = dvigubai(10);
console.log(x10);
const x11 = dvigubai(11);
console.log(x11);
const x12 = dvigubai(-12);
console.log(x12);

function introduction(name, age) {
    return `Sveiki, mano vardas ${name} ir man ${age} metai.`;
}

const x13 = introduction("Jonas", 99);
console.log(x13);
const x14 = introduction("Maryte", 88);
console.log(x14);

// const x15 = introduction("Petras");
// console.log(x15);
// const x16 = introduction(66);
// console.log(x16);
// const x17 = introduction();
// console.log(x17);

console.clear();

// 0 - 0 Eur
// 10 - 10 Eur
// 50 - 50 Eur
// 90 - 90 Eur
// 99 - 99 Eur
// 100 - 100 Eur
// 102 - 51 Eur
// 200 - 100 Eur

function price(amount) {
    if (amount < 100) {
        return amount + " Eur";
    } else {
        return (amount / 2) + " Eur";
    }
}

console.log(price(0), "->", "0 Eur");
console.log(price(10), "->", "10 Eur");
console.log(price(50), "->", "50 Eur");
console.log(price(90), "->", "90 Eur");
console.log(price(99), "->", "99 Eur");
console.log(price(100), "->", "50 Eur")
console.log(price(102), "->", "51 Eur");
console.log(price(200), "->", "100 Eur");
console.log(price(-200), "->", "ERROR");
console.log(price(Infinity), "->", "ERROR");
console.log(price(-Infinity), "->", "ERROR");
console.log(price(NaN), "->", "ERROR");
console.log(price(true), "->", "ERROR");
console.log(price("string"), "->", "ERROR");
console.log(price(undefined), "->", "ERROR");
console.log(price(), "->", "ERROR");
console.log(price(price), "->", "ERROR");

console.clear();

function betterPrice(amount) {
    // validacijos
    if (typeof amount !== "number") {
        return "ERROR: duok skaiciaus tipo reiksme";
    }

    if (amount < 0) {
        return "ERROR: duok teigiama skaiciu";
    }

    if (amount === Infinity) {
        return "ERROR: skaicius negali buti Infinity";
    }

    if (isNaN(amount)) {
        return "ERROR: duok normalu skaiciu";
    }

    // logika
    let result = "";

    if (amount < 100) {
        result = amount + " Eur";
    } else {
        result = (amount * 0.5) + " Eur";
    }

    // rezultato validacija
    if (result === "") {
        return "ERROR: kazkas negerai su logika...";
    }

    // rezultato grazinimas
    return result;
}


console.log(betterPrice(0), "->", "0 Eur");
console.log(betterPrice(10), "->", "10 Eur");
console.log(betterPrice(50), "->", "50 Eur");
console.log(betterPrice(90), "->", "90 Eur");
console.log(betterPrice(99), "->", "99 Eur");
console.log(betterPrice(100), "->", "50 Eur")
console.log(betterPrice(102), "->", "51 Eur");
console.log(betterPrice(200), "->", "100 Eur");

console.log(betterPrice(true), "->", "ERROR");
console.log(betterPrice("string"), "->", "ERROR");
console.log(betterPrice(undefined), "->", "ERROR");
console.log(betterPrice(), "->", "ERROR");
console.log(betterPrice(betterPrice), "->", "ERROR");

console.log(betterPrice(-200), "->", "ERROR");
console.log(betterPrice(Infinity), "->", "ERROR");
console.log(betterPrice(-Infinity), "->", "ERROR");
console.log(betterPrice(NaN), "->", "ERROR");


// isNaN
// Number.isNaN;
// isFinite - ar galima isreiksti skaitmenimis

// dar vienas:
// if ("" + NaN === "NaN") {
//     console.log("taip");
// } else {
//     console.log("ne")
// }
