/*
HOF - higher order function
*/

// const sum = (a, b) => a + b;
// const diff = (a, b) => a - b;
// const multi = (a, b) => a * b;
// const div = (a, b) => a / b;

const mathFunctions = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

const n1 = 7;
const n2 = 5;
const operation = "+";

function math(a, opera, b) {
    return mathFunctions[opera](a, b);
}

const res1 = math(n1, "+", n2);
const res2 = math(n1, "-", n2);
const res3 = math(n1, "*", n2);
const res4 = math(n1, "/", n2);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

function firstLetter(text) {
    return text[0];
}

function lastLetter(text) {
    return text[text.length - 1];
    // return text.at(-1);
}


// HOF - gauna kitas funkcijas (giveMeLetter yra HOF)
function giveMeLetter(text, func) {
    return func(text);
}

console.log(firstLetter("Chuck"));
console.log(lastLetter("Chuck"));

console.log(giveMeLetter("Chuck", firstLetter));
console.log(giveMeLetter("Chuck", lastLetter));

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const calc = (a, func, b) => func(a, b);

console.log(calc(7, sum, 5));
console.log(calc(7, diff, 5));



