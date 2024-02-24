function properName(name) {
    const firstLetter = name[0].toUpperCase();
    const remainingLetters = name.slice(1).toLowerCase();

    return firstLetter + remainingLetters;
}

console.log(properName("jonas"));
console.log(properName("jONAS"));
console.log(properName("jONAS"));
console.log(properName("JONAS"));
console.log(properName("JoNaS"));
console.log(properName("Jonas"));