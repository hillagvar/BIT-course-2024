/*
IF - reiksmiu palyginimas

SABLONAI:
if () {}
if () {} else {}
if () {} else if {} else 


PALYGINIMO OPERATORIAI:
-visi: >, <, >=, <=, ==, ===, !=, !==
-naudotini: >, <, >=, <=, ===, !==
-nenaudotini: ==, !=

*/

const amzius = 24;
const profesija = "Programuotojas";
const amziausLimitas = 21;

console.log("START");

if (amzius >= amziausLimitas) {
    console.log("Ko noresi?");
} else {
    console.log("Deja...per mazai metu");
}

let msg = profesija + " ieina i bara...";
console.log(msg);

if (amzius >= amziausLimitas) {
    msg = "Tai ko noresi?";
} else {
    msg = "Sorry....";
}

console.log(msg);

console.log("END");

console.clear();

const win = "10";
let msgWin = "Tu neturi windowsu??"

if (win === "95") {
    msgWin = "Windows 95";
} else if (win === "98") {
    msgWin = "Windows 98";
} else if (win === "XP") {
    msgWin = "Windows XP";
} else if (win === "Vista") {
    msgWin = "Windows Vista";
} else if (win === "10") {
    msgWin = "Windows 10";
} else {
    msgWin = "Neatpazinta OS....";
}

console.log(msgWin);

console.clear();

if ("4" == 4) {
    console.log("Taip");
} else {
    console.log("Ne");
}

if ("4" === 4) {
    console.log("Taip");
} else {
    console.log("Ne");
}

let a = "labas";
const b = "labas";
let msgAB = "Default";


if (a = b) {
    msgAB = "Lygus";
} else {
    msgAB = "Skirtingi";
}

console.log(msgAB, a, b);


console.clear();


// CODE NESTING

const diena = 3;
// iki 11 val - pusryciu meniu
// iki 16 val - dienos meniu
// po 16 val - vakaro meniu
const laikas = 13;

if (diena === 1) {
    if (laikas < 11) {
        console.log("Pirmadienio meniu: rytas");
    } else if (laikas < 16) {
        console.log("Pirmadienio meniu: diena");
    } else {
        console.log("Pirmadienio meniu: vakaras");
    }
} else {
    if (laikas < 11) {
        console.log("Standartinis meniu: rytas");
    } else if (laikas < 16) {
        console.log("Standartinis meniu: diena");
    } else {
        console.log("Standartinis meniu: vakaras");
    }
}


if (diena === 1 && laikas < 11) {
    console.log("Pirmadienio meniu: rytas");
} else if (diena === 1 && laikas < 16) {
    console.log("Pirmadienio meniu: diena");
} else if (diena === 1) {
    console.log("Pirmadienio meniu: vakaras");
} else if (diena !== 1 && laikas < 11) {
    console.log("Standartinis meniu: rytas");
} else if (diena !== 1 && laikas < 16) {
    console.log("Standartinis meniu: diena");
} else if (diena !== 1) {
    console.log("Standartinis meniu: vakaras");
}