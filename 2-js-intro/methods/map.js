const marks = [10, 2, 8, 4, 6];
const doubleMarks = [];

for (const mark of marks) {
    doubleMarks.push(mark * 2);
}

console.log(marks);
console.log(doubleMarks);

const tripleMarks = marks.map(mark => mark * 3);
console.log(tripleMarks);

// Reikia : jeigu skaicius teigiamas, palikti koks yra, jeigu neigiamas * 10
const randomNumbers = [10, -2, 3.14, 8.77, 444444, -66.6];

const randomNumbers2 = [];

for (const number of randomNumbers) {
    randomNumbers2.push(number > 0 ? number : number * 10);
}

console.log(randomNumbers2);

const rn3 = randomNumbers.map(n => n > 0 ? n : n * 10);
console.log(rn3);


console.clear();


const pazymiai = [10, 2, 8, 4, 6];

function geresnisPazymys(n) {
    if (n * 2 > 10) {
        return 10;
    }
    return n * 2;

    // return n * 2 > 10 ? 10 : n * 2;

}

function updateMarks(marks) {
    const newMarks = [];

    for (const mark of marks) {
        // const newMarkValue = mark * 2;

        newMarks.push(geresnisPazymys(mark));
        // if (newMarkValue <= 10) {
        //     newMarks.push(newMarkValue);
        // } else {
        //     newMarks.push(10);
        // }
    }

    return newMarks;
}


console.log(updateMarks(pazymiai));

const geresniPazymiai = pazymiai
    .map(n => n * 2 > 10 ? 10 : n * 2);

console.log(geresniPazymiai);


const geresniPazymiai2 = pazymiai
    .map(geresnisPazymys);

console.log(geresniPazymiai2);

console.log("-------------");

const students = ["Jonas", "Maryte", "Petras", "Ona"];

function lastChar(text) {

    // const lastCharIndex = text.length - 1;
    // return text[lastCharIndex];

    return text[text.length - 1];

}

const abbr = students.map(name => name[0]);

const abbr2 = students.map(lastChar);

console.log(abbr);
console.log(abbr2);

