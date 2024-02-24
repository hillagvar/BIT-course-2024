console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][3]);
console.log([10, 2, 8, 4, 6][6]);
console.log([10, 2, 8, 4, 6][-1]);

const marks = [10, 2, 8, 4, 6];
marks[1] = 5;
console.log(marks);
marks[4] = "belekas";
console.log(marks);
marks[6] = 666;
console.log(marks);
// marks[5] = 555;
// console.log(marks);

for (const item of marks) {
    console.log(item);
}

const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);

jonas.push(4, 6);
console.log(jonas);

const maryte = [];
console.log(maryte);

maryte.unshift(2);
console.log(maryte);

maryte.unshift(10);
console.log(maryte);

maryte.unshift(8, 9);
console.log(maryte);

console.log("Pomidoras".slice(0, -1));


