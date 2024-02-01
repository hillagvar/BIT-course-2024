const text = "Pomidoras";

const lower = text.toLowerCase();
console.log(lower);

const upper = text.toUpperCase();
console.log(upper);

const combo = text.toUpperCase().toLowerCase();
console.log(combo);

const firstLetter = text[0];
console.log(firstLetter);

const secondLetter = text[1];
console.log(secondLetter);

const lastLetter = text[8];
console.log(lastLetter);

console.log(text.length);

// "Pomidoras" turi 9 raides.

const sakinys = `"${text}" turi ${text.length} raides`;

console.log(sakinys);

const ilgis = "Kiek cia simboliu?".length;
console.log(ilgis);

const name1 = "Jonas";
const surname1 = "Jonaitis";
const name2 = "Maryte";
const surname2 = "Marytaite";
const name3 = "Petras";
const surname3 = "Petraitis";
const name4 = "Ona";
const surname4 = "Onaite";

const people = [
    {
        vardas: name1,
        pavarde: surname1
    },
    {
        vardas: name2,
        pavarde: surname2
    },
    {
        vardas: name3,
        pavarde: surname3
    },
    {
        vardas: name4,
        pavarde: surname4
    }
]


const people2 = [
    [name1, surname1],
    [name2, surname2],
    [name3, surname3],
    [name4, surname4]
]


for (let i = 0; i < people.length; i++) {
    console.log(`Vardo ${people[i]['vardas']} ilgis yra ${people[i]['vardas'].length} simboliai.`);

    console.log(`Asmens ${people[i]['vardas']} ${people[i]['pavarde']} inicialai yra ${people[i]['vardas'][0]}.${people[i]['pavarde'][0]}.`)
}

console.log("-----------------");

for (let i = 0; i < people2.length; i++) {
    console.log(`Vardo ${people2[i][0]} ilgis yra ${people2[i][0].length} simboliai.`);

    console.log(`Asmens ${people2[i][0]} ${people2[i][1]} inicialai yra ${people2[i][0][0]}.${people2[i][1][0]}.`)
}




// vardo "Jonas" ilgis yra 5 raides
// asmens Jonas Jonaitis inicialai yra

// console.log(`Vardo ${ name1 } ilgis yra ${ name1.length } simboliai.`);
// console.log(`Asmens ${ name1 } ${ surname1 } inicialai yra ${ name1[0] }.${ surname1[0] }.`);

// console.log(`Vardo ${ name4 } ilgis yra ${ name4.length } simboliai.`);
// console.log(`Asmens ${ name4 } ${ surname4 } inicialai yra ${ name4[0] }.${ surname4[0] }.`);

// console.log(`Vardo ${ name2 } ilgis yra ${ name2.length } simboliai.`);
// console.log(`Asmens ${ name2 } ${ surname2 } inicialai yra ${ name2[0] }.${ surname2[0] }.`);

// console.log(`Vardo ${ name3 } ilgis yra ${ name3.length } simboliai.`);
// console.log(`Asmens ${ name3 } ${ surname3 } inicialai yra ${ name3[0] }.${ surname3[0] }.`);