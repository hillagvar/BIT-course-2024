/*
Duomens tipo nustatymo operatorius
*/

const a = typeof 5;
console.log(a);

const b = typeof "fksfj";
console.log(b);

const c = typeof "";
console.log(c);

function example() {
    return 777;
}

const d = typeof example;
console.log(d);

const e = typeof example();
console.log(e);

const f = typeof undefined;
console.log(f);

const g = typeof (typeof true);
console.log(g);