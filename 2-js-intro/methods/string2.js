const text = "Pomidoras";

console.log(text.at(0), text[0]);
console.log(text.at(1), text[1]);
console.log(text.at(2), text[2]);
console.log(text.at(3), text[3]);
console.log(text.at(4), text[4]);
console.log(text.at(9), text[9]);
console.log(text.at(-1), text[-1]);
console.log(text.at(-2), text[-2]);
console.log(text.at(-3), text[-3]);
console.log(text.at(-4), text[-4]);

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('c'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('B'.charCodeAt(0));

console.log(String.fromCharCode(169));

console.clear();

console.log(text.endsWith('a'));
console.log(text.endsWith('s'));
console.log(text.endsWith('as'));
console.log(text.startsWith('as'));
console.log(text.startsWith('P'));

console.clear();

console.log("Pomidoras".includes("o"));
console.log("Pomidoras".includes("omi"));
console.log("Pomidoras".includes("omigod"));
console.log("Pomidoras".includes("POmi"));
console.log("Pomidoras".includes("Pomi"));
console.log("Pomidoras".includes("ras"));

console.clear();

console.log("Pomidoras".indexOf("P"));
console.log("Pomidoras".indexOf("o"));
console.log("Pomidoras".indexOf("x"));

console.clear();

// pakartok teksta "labas" 3 kartus -> "labaslabaslabas"

function repeat(text, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result += text;
    }

    return result;
}

console.log(repeat("labas", 3));
console.log(repeat("rytas", 5));
console.log(repeat("???", 3));
console.log(repeat("labas", 4));
console.log(repeat("labas", 0));
console.log(repeat("labas", 1));

console.log("-----------");

console.log("labas".repeat(3));
console.log("rytas".repeat(5));
console.log("???".repeat(3));
console.log("labas".repeat(4));
console.log("labas".repeat(0));
console.log("labas".repeat(1));

console.clear();

console.log("vasara".replace("a", "-"));

const vasara = "vasara"
    .replace("a", "-")
    .replace("a", "-")
    .replace("a", "-");

console.log(vasara);

const vasara2 = "vasaravasaravasara".replaceAll("a", "-");

console.log(vasara2);

console.clear();

// imtinai pirmas skaicius, antras skaicius ne!
console.log("Pomidoras".slice());
console.log("Pomidoras".slice(0));
console.log("Pomidoras".slice(4));
console.log("Pomidoras".slice(4, 6));

//pradeda nuo galo
console.log("Pomidoras".slice(-1));
console.log("Pomidoras".slice(-2));
console.log("Pomidoras".slice(-3));
console.log("Pomidoras".slice(-4));
console.log("Pomidoras".slice(-4, -2));
console.log("Pomidoras".slice(2, -2));
console.log("Pomidoras".slice(-2, 2));

console.clear();

console.log("Pomidoras".split("m"));
console.log("Pomidoras".split("i"));

// kerpa du kartus
console.log("Pomidoras".split("o"));

console.log("vasara".split("s"));
console.log("vasara".split("v"));
console.log("vasara".split("v")[0].length);
console.log("vasara".split("v")[1].length);
console.log("vasara".split("a"));
console.log("vasara".split("x"));
console.log("".split("x"));
console.log("".split(""));
console.log("vasara".split(""));

console.clear();

// pasalina tarpus is teksto pradzios ir pabaigos
console.log("vasara".trim());
console.log(`"${"vasara".trim()}"`);
console.log(`"${"v a s a r a".trim()}"`);
console.log(`"${"v  a  s  a  r  a".trim()}"`);
console.log(`"${"   vasara".trim()}"`);
console.log(`"${"vasara   ".trim()}"`);
















