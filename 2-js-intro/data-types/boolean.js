/* 
BOOLEAN - logine reiksme

Galimos reiksmes:
-true
-false

*/

const arSninga = true;
const arLyja = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

// SPORTAS
// - varzybos vyksta tik dienos metu
// - varzybos vyksta jei tik turime bent 2 komandas

const arDiena = false;
const arYraDviKomandos = true;

const arVykstaVarzybos = arDiena && arYraDviKomandos;

console.log("Varzybos:", arVykstaVarzybos);

// KERMOSIUS
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTurimGaideli = true;
const arTurimLazdele = true;
const arTurimGrybuka = true;

const arVaikasGausSaldaini = arTurimGaideli || arTurimLazdele || arTurimGrybuka;

console.log("Kermosius:", arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, "->", false);
console.log(a || b, "->", true);
console.log(a || b || c, "->", true);
console.log(a && b && c, "->", false);

console.log(a && b || c, "->", true);
console.log(a || b && c, "->", true);

console.clear();

const arMiega = false;
console.log(!arMiega);

console.clear();

// visi string yra true, isskyrus tuscias

console.log(!"Labas");
console.log(!"");

console.log(!!"Labas");

//visi skaiciai yra true, isskyrus 0
console.log(!5);
console.log(!-5);
console.log(!0);

console.log("---------");
console.log("Namu darbai:");


// Namu darbai

//pirmas
console.log(true && true && true && true, "->", true);
console.log(true || true && true && true, "->", true);
console.log(true && true || true && true, "->", true);
console.log(true && true && true || true, "->", true);
console.log(true || true || true && true, "->", true);
console.log(true || true && true || true, "->", true);
console.log(true && true || true || true, "->", true);
console.log(true || true || true || true, "->", true);

//antras
console.log(false && true && true && true, "->", false);
console.log(false || true && true && true, "->", true);
console.log(false && true || true && true, "->", true);
console.log(false && true && true || true, "->", true);
console.log(false || true || true && true, "->", true);
console.log(false || true && true || true, "->", true);
console.log(false && true || true || true, "->", true);
console.log(false || true || true || true, "->", true);

//trecias
console.log(true && false && true && true, "->", false);
console.log(true || false && true && true, "->", true);
console.log(true && false || true && true, "->", true);
console.log(true && false && true || true, "->", true);
console.log(true || false || true && true, "->", true);
console.log(true || false && true || true, "->", true);
console.log(true && false || true || true, "->", true);
console.log(true || false || true || true, "->", true);

//ketvirtas
console.log(true && true && false && true, "->", false);
console.log(true || true && false && true, "->", true);
console.log(true && true || false && true, "->", true);
console.log(true && true && false || true, "->", true);
console.log(true || true || false && true, "->", true);
console.log(true || true && false || true, "->", true);
console.log(true && true || false || true, "->", true);
console.log(true || true || false || true, "->", true);

//penktas
console.log(true && true && true && false, "->", false);
console.log(true || true && true && false, "->", true);
console.log(true && true || true && false, "->", true);
console.log(true && true && true || false, "->", true);
console.log(true || true || true && false, "->", true);
console.log(true || true && true || false, "->", true);
console.log(true && true || true || false, "->", true);
console.log(true || true || true || false, "->", true);

//sestas
console.log(false && false && true && true, "->", false);
console.log(false || false && true && true, "->", false);
console.log(false && false || true && true, "->", true);
console.log(false && false && true || true, "->", true);
console.log(false || false || true && true, "->", true);
console.log(false || false && true || true, "->", true);
console.log(false && false || true || true, "->", true);
console.log(false || false || true || true, "->", true);

//septintas
console.log(false && true && false && true, "->", false);
console.log(false || true && false && true, "->", false);
console.log(false && true || false && true, "->", false);
console.log(false && true && false || true, "->", true);
console.log(false || true || false && true, "->", true);
console.log(false || true && false || true, "->", true);
console.log(false && true || false || true, "->", true);
console.log(false || true || false || true, "->", true);

//astuntas
console.log(false && true && true && false, "->", false);
console.log(false || true && true && false, "->", false);
console.log(false && true || true && false, "->", false);
console.log(false && true && true || false, "->", false);
console.log(false || true || true && false, "->", true);
console.log(false || true && true || false, "->", true);
console.log(false && true || true || false, "->", true);
console.log(false || true || true || false, "->", true);

//devintas
console.log(true && false && false && true, "->", false);
console.log(true || false && false && true, "->", true);
console.log(true && false || false && true, "->", false);
console.log(true && false && false || true, "->", true);
console.log(true || false || false && true, "->", true);
console.log(true || false && false || true, "->", true);
console.log(true && false || false || true, "->", true);
console.log(true || false || false || true, "->", true);

//desimtas
console.log(true && false && true && false, "->", false);
console.log(true || false && true && false, "->", true);
console.log(true && false || true && false, "->", false);
console.log(true && false && true || false, "->", false);
console.log(true || false || true && false, "->", true);
console.log(true || false && true || false, "->", true);
console.log(true && false || true || false, "->", true);
console.log(true || false || true || false, "->", true);

//vienuoliktas
console.log(true && true && false && false, "->", false);
console.log(true || true && false && false, "->", true);
console.log(true && true || false && false, "->", true);
console.log(true && true && false || false, "->", false);
console.log(true || true || false && false, "->", true);
console.log(true || true && false || false, "->", true);
console.log(true && true || false || false, "->", true);
console.log(true || true || false || false, "->", true);

//dvyliktas
console.log(false && false && false && true, "->", false);
console.log(false || false && false && true, "->", false);
console.log(false && false || false && true, "->", false);
console.log(false && false && false || true, "->", true);
console.log(false || false || false && true, "->", false);
console.log(false || false && false || true, "->", true);
console.log(false && false || false || true, "->", true);
console.log(false || false || false || true, "->", true);

//tryliktas
console.log(false && false && true && false, "->", false);
console.log(false || false && true && false, "->", false);
console.log(false && false || true && false, "->", false);
console.log(false && false && true || false, "->", false);
console.log(false || false || true && false, "->", false);
console.log(false || false && true || false, "->", false);
console.log(false && false || true || false, "->", true);
console.log(false || false || true || false, "->", true);

//keturioliktas
console.log(false && true && false && false, "->", false);
console.log(false || true && false && false, "->", false);
console.log(false && true || false && false, "->", false);
console.log(false && true && false || false, "->", false);
console.log(false || true || false && false, "->", true);
console.log(false || true && false || false, "->", false);
console.log(false && true || false || false, "->", false);
console.log(false || true || false || false, "->", true);

//penkioliktas
console.log(true && false && false && false, "->", false);
console.log(true || false && false && false, "->", true);
console.log(true && false || false && false, "->", false);
console.log(true && false && false || false, "->", false);
console.log(true || false || false && false, "->", true);
console.log(true || false && false || false, "->", true);
console.log(true && false || false || false, "->", false);
console.log(true || false || false || false, "->", true);

//sesioliktas
console.log(false && false && false && false, "->", false);
console.log(false || false && false && false, "->", false);
console.log(false && false || false && false, "->", false);
console.log(false && false && false || false, "->", false);
console.log(false || false || false && false, "->", false);
console.log(false || false && false || false, "->", false);
console.log(false && false || false || false, "->", false);
console.log(false || false || false || false, "->", false);








