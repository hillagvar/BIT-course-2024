// INICIJAVIMAS

// 1. Uzduotis

const num1 = 12;
console.log(num1);
const num2 = 54;
console.log(num2);
const num3 = 9;
console.log(num3);

// 2. Uzduotis

const string1 = "Zuikis valgo";
console.log(string1);
const string2 = "Pavasaris";
console.log(string2);
const string3 = "Ahoy";
console.log(string3);

// 3. Uzduotis
const array1 = [12, 15, 16, 2, -7];
console.log(array1);
const array2 = [-8, -7, 6, 248, 24];
console.log(array2);
const array3 = [3, 33, 555, 4, 8];
console.log(array3);

// 4. Uzduotis
const array4 = ["zuikis", "vovere", "ozka", "asilas", "gaidys"];
console.log(array4);
const array5 = ["avokadas", "bananas", "apelsinas", "obuolys", "kivis"];
console.log(array5);
const array6 = ["JavaScript", "PHP", "C#", "Java", "Python"];
console.log(array6);

// VEIKSMAI SU KINTAMAISIAIS

// 1. Uzduotis
const sum1 = num1 + num2 + num3;
console.log(sum1);

// 2. Uzduotis
const stringSum = string1 + " " + string2 + " " + string3;
console.log(stringSum);

// 3. Uzduotis
const sum3 = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(sum3);
const sum4 = array2[0] - array2[1] + array2[2] - array2[3] + array2[4];
console.log(sum4);
const sum5 = array3[0] - array3[1] + array3[2] - array3[3] + array3[4];
console.log(sum5);

// 4. Uzduotis
const stringSum2 = array4[0] + ", " + array4[1] + ", " + array4[2] +
    ", " + array4[3] + ", " + array4[4];
console.log(stringSum2);
const stringSum3 = array5[0] + ", " + array5[1] + ", " + array5[2] +
    ", " + array5[3] + ", " + array5[4];
console.log(stringSum3);
const stringSum4 = array6[0] + ", " + array6[1] + ", " + array6[2] +
    ", " + array6[3] + ", " + array6[4];
console.log(stringSum4);

// KINTAMUJU PALYGINIMAS

const num4 = 29;
const num5 = 32;
const string4 = "Petrazole";
const string5 = "Kiaulpiene";

// 1. Uzduotis

// a, b
if (num4 > num5) {
    console.log("pirmas skaicius didesnis");
} else if (num4 < num5) {
    console.log("antras skaicius didesnis");
} else {
    console.log("skaiciai lygus");
}

// c
if (num4 === num5) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta");
}

// d
if (num4 !== num5) {
    console.log("Pomidoras");
} else {
    console.log("Bandykite kita karta");
}

// e
if (num4 >= num5) {
    console.log("pirmas skaicius didesnis arba lygus");
} else if (num4 <= num5) {
    console.log("antras skaicius didesnis arba lygus");
}

// f
if (num4 <= num5) {
    console.log("pirmas skaicius mazesnis arba lygus");
} else if (num4 >= num5) {
    console.log("antras skaicius mazesnis arba lygus");
}

// 2. Uzduotis
console.log(string4.length);
console.log(string5.length);