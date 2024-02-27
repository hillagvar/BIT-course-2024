const marks = [10, 2, 8, 4, 6];

const first = marks[0];
const second = marks[1];
const third = marks[2];
const restMarks = marks.slice(3);

// item, index, array - galioja ir map, ir filter, ir kt array metodams
// const restMarks = marks.filter((item, index, array) => index >= 2);

console.log(first, second, third, restMarks);

// [] = array
// array destructuring
// reiksmes is masyvo galima imti tik is eiles
// ... yra "rest" operatorius
const [a, b, c, ...restABC] = marks;

console.log(a, b, c, restABC);

const t1 = [1, 2];
const t2 = [3, 4, 5];
const t3 = [6, 7, 8, 9];

const t12 = t1.concat(t2);
console.log(t12);

const t123 = t1.concat(t2, t3);
console.log(t123);

// ... yra "spread" operatorius
const rest12 = [...t1, ...t2];

console.log(rest12);

console.clear();

const car = {
    brand: "Audi",
    model: 80,
    colour: "red",
    doors: 5,
    wheels: 4,
    gear: {
        type: "manual",
        count: 5,
    },
};

const { brand, colour, gear, ...restCar } = car;
console.log(brand, colour, gear);
console.log(restCar);
const { type } = gear;
console.log(type);

const xBrand = car.brand;
const xColour = car.colour;
const xGear = car.gear;
const xType = xGear.type;

const usedCarKeys = ["brand", "colour", "gear"];

const xRestCar = {};
// - brand, colour, gear
// + model, doors, wheels

for (const key in car) {
    if (!usedCarKeys.includes(key)) {
        xRestCar[key] = car[key];
    }
}

console.log(xRestCar);