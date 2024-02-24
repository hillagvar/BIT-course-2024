const n1 = 7;
const n2 = 5;

// kintamajam priskiriama anonimine funkcija
const diff = function (a, b) {
    return a - b;
}

console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
}

console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// jeigu logikos bloke yra tik viena salyga (statement), tai galima nerasyti {return}
const div = (a, b) => a / b;

console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// jeigu parametru bloke yra tik vienas parametras, tai galima nerasyti: (, )
const cube = a => a ** 3;

console.log(`${n1} ** 3 = ${cube(n1)}`);
console.log(`${n2} ** 3 = ${cube(n2)}`);



const formatName = s => s[0].toUpperCase() + s.slice(1).toLowerCase();

console.log(formatName("jonas"));
console.log(formatName("jONAS"));
console.log(formatName("jONAS"));
console.log(formatName("JONAS"));
console.log(formatName("JoNaS"));
console.log(formatName("Jonas"));