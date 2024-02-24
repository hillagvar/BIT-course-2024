const name1 = "Jonas";
const name2 = "Maryte";
const name3 = "Petras";
const name4 = "Ona";

const age1 = 99;
const age2 = 88;
const age3 = 77;
const age4 = 66;

const isMarried1 = true;
const isMarried2 = false;
const isMarried3 = false;
const isMarried4 = true;


function intro(name, age, isMarried) {
    return `${name} (${age}): ${isMarried ? "" : "not "}married.`;
    // return `Hi, my name is ${name}. I am ${isMarried ? "" : "not "}married and I am ${age} years old.`;
}

console.log(intro(name1, age1, isMarried1));
console.log(intro(name2, age2, isMarried2));
console.log(intro(name3, age3, isMarried3));
console.log(intro(name4, age4, isMarried4));

const person1 = ["Jonas", 99, true];
const person2 = ["Maryte", 88, false];
const person3 = ["Petras", 77, false];
const person4 = ["Ona", 66, true];

function intro2(info) {
    const name = info[0];
    const age = info[1];
    const isMarried = info[2];
    return `${name} (${age}): ${isMarried ? "" : "not "}married.`;
    // return `Hi, my name is ${name}. I am ${isMarried ? "" : "not "}married and I am ${age} years old.`;
}

console.log(intro2(person1));
console.log(intro2(person2));
console.log(intro2(person3));
console.log(intro2(person4));

const student1 = {
    name: "Jonas",
    age: 99,
    isMarried: true,
};

const student2 = {
    name: "Maryte",
    age: 88,
    isMarried: false,
};

console.log(student1);
console.log(student2);

//standartine objekto reiksmes istraukimo sintakse
console.log(student1['name']);
console.log(student2['age']);

//supaprastinta objekto reiksme istraukimo sintakse
console.log(student1.name);
console.log(student2.age);

const car = {
    brand: "Audi",
    model: 80,
    colour: "red",
    liaudyjeVadinama: "bulka",
    "liaudyje-vadinama": "bulka", // situos du galima istraukti tik su *standartine* sintakse
    "liaudyje vadinama": "bulka",
}

console.log("-------------");

console.log(car.brand);
console.log(car.model);
console.log(car.colour);
console.log(car.liaudyjeVadinama);
console.log(car["liaudyje-vadinama"]);
console.log(car["liaudyje vadinama"]);

console.log("-------------");

function intro3(student) {
    return `${student.name} (${student.age}): ${student.isMarried ? "" : "not "}married.`;
}

console.log(intro3(student1));
console.log(intro3(student2));
