const abc = ['a', 'c', 'b', 'z', 'f', 's'];

abc.sort().reverse();
console.log(abc);

const numbers = [10, 2, 8, 22, 25, 30, 300, 4, 6, 0];

numbers.sort((a, b) => a - b);
console.log(numbers);

const students = [
    { name: "Jonas", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Petras", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
];

students.sort((a, b) => a.age - b.age);

console.log(students);

const students2 = [
    { name: "Jonas", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Petras", age: 77, isMarried: false },
    { name: "Zigmas", age: 44, isMarried: true },
    { name: "Antanas", age: 55, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
];

students2.sort((a, b) => a.name === b.name ? 0 : (a.name < b.name ? -1 : 1));

console.log(students2);

const students3 = [
    { name: "Jonas", age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: "Maryte", age: 88, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: "Petras", age: 77, isMarried: false, marks: [1] },
    { name: "Ona", age: 66, isMarried: true, marks: [7, 7, 7] },
];

// reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip
// nauja studento objekto rakta (marksCount)

// reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti
// kaip nauja studento objekto rakta (marksAverage)

// reikia rasti kiekvieno studento maziausia pazymi ir tai prideti kaip
// nauja studento objekto rakta (minMark)

// reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip
// nauja studento objekto rakta (maxMark)

// reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu
// vidurkis yra didesnis uz 5

// reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra
// didesnis uz 5