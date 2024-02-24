// susumuoti visus masyve esancius teigiamus skaicius.

const a1 = [10, 2, 8, 4, 6];
const a2 = [-10, 2, 8, 4, 6];
const a3 = [-10, -2, -8, -4, -6];

function removeNegative(list) {
    let result = 0;

    for (const number of list) {
        if (number > 0) {
            result += number;
        }
    }

    return result;
}

console.log(removeNegative(a1));
console.log(removeNegative(a2));
console.log(removeNegative(a3));

