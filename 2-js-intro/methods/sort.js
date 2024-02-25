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

console.log("---------");

// reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip
// nauja studento objekto rakta (marksCount)

for (const student of students3) {
    student.marksCount = student.marks.length;
}

console.log(students3);
console.log("---------");

// reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti
// kaip nauja studento objekto rakta (marksAverage)

for (const student of students3) {
    let marksSum = 0;
    for (const mark of student.marks) {
        marksSum += mark;
    }
    student.marksAverage = marksSum / student.marks.length;
}

console.log(students3);
console.log("---------");

// reikia rasti kiekvieno studento maziausia pazymi ir tai prideti kaip
// nauja studento objekto rakta (minMark) 

for (const student of students3) {
    const sortedMarks = student.marks.toSorted((a, b) => a - b);
    // student.marks.sort((a, b) => a - b);
    student.minMark = sortedMarks[0];
}

console.log(students3);
console.log("---------");

// reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip
// nauja studento objekto rakta (maxMark)

for (const student of students3) {
    const sortedMarks = student.marks.toSorted((a, b) => b - a);
    student.maxMark = sortedMarks[0];
}

console.log(students3);
console.log("---------");

// reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu
// vidurkis yra didesnis uz 5

const goodStudents = students3.filter(student => student.marksAverage > 5);

console.log(goodStudents);
console.log("---------");

// reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra
// didesnis uz 5

const goodStudentNames = [];

for (const student of students3) {
    if (student.marksAverage > 5) {
        goodStudentNames.push(student.name);
    }
}

console.log(goodStudentNames);

console.clear();

const example = {
    title: "Long title",
    subtitle: "Short subtitle",
};

console.log(example);
console.log(example.title);
console.log(example.subtitle);

example.title = "New title";
console.log(example);
console.log(example.title);
console.log(example.subtitle);

example.newStuff = "something interesting...";
console.log(example);