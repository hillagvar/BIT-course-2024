const student = {
    name: "Jonas",
    age: 99,
    isMarried: true,
}

console.log(student.name);
console.log(student.age);
console.log(student.isMarried);

const noriuSuzinoti = "name";
// const noriuSuzinoti = "age";

const name = student[noriuSuzinoti];
// const name = student["name"]

console.log(name);

const keys = Object.keys(student);

console.log(keys);

const keysCount = Object.keys(student).length;

console.log(keysCount);

const car = {
    brand: "Audi",
    model: 80,
    colour: "red",
    price: 300,
}

const carKeys = Object.keys(car);

for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i]
    const value = car[key];
    console.log(i, key, value);
}

for (const key in car) {
    const value = car[key];
    console.log(key, value);
}

