const students = [
    { name: "Jonas", age: 99, isMarried: true },
    { name: "Maryte", age: 88, isMarried: false },
    { name: "Petras", age: 77, isMarried: false },
    { name: "Ona", age: 66, isMarried: true },
]



for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.age}`);
}

for (const student of students) {
    console.log(`${student.name}: ${student.age}`);
}

const text = "Pomidoras";

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    console.log(i, letter);
}

for (const letter of text) {
    console.log(letter);
}