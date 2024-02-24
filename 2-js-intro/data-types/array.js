/*
ARRAY - sarasas, masyvas, listas, zodynas, N-mate matrica
*/

const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

console.log("Empty kiekis:", empty.length);
console.log("Pazymiu kiekis:", marks.length);

const students = ["Jonas", "Maryte", "Petras", "Ona"];

console.log("Studentu kiekis:", students.length);

console.log(marks[0], marks[1], marks[2]);
console.log(marks[99999]);
console.log(marks[-1]);
console.log(marks[3.5]);

// Gaunam studento penkiu pazymiu masyva,
// reikia suskaiciuoti pazymiu vidurki.

function marksAverage(marks) {
    // validacijos

    //logika
    // const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];

    // let total = 0;
    // total += marks[0];
    // total += marks[1];
    // total += marks[2];
    // total += marks[3];
    // total += marks[4];

    let total = 0;
    let i = 0;

    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];


    const count = marks.length;
    const result = total / count;

    //rezultato validacija

    //rezultato grazinimas
    return result;
}

console.log(marksAverage([10, 2, 8, 4, 6]), "->", 6);
console.log(marksAverage([10, 10, 10, 10, 10]), "->", 10);
console.log(marksAverage([1, 1, 1, 1, 1]), "->", 1);
console.log(marksAverage([1, 2, 3, 4, 5]), "->", 3);

