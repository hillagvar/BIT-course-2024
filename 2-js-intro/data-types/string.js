/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai/budai: ' (vienguba), " (dviguba), ` (backtick)
*/

const text1 = "pirmas tekstas";
console.log(text1);

const text2 = "cia yra tekstas be kabuciu";
console.log(text2);

const text3 = "vienguba (') kabute";
console.log(text3);

const text4 = 'dviguba (") kabute';
console.log(text4);

// vienguba IR dviguba kabute

const kabutes = "vienguba (') ir dviguba (\") kabute";
const kabutesMix = "Vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabutes);
console.log(kabutesMix);

const vardas = "Chuck";
const pavarde = "Norris";

const fullName = vardas + " " + pavarde;
console.log(fullName);

console.clear();

const gele = "tulpe";
const spalva = "geltona";
const sakinys = `as turiu ${gele} kuri yra ${spalva}`;
console.log(sakinys);

const sakinys2 = 'As turiu ' + gele + ' kuri yra ' + spalva + '.'
console.log(sakinys2);

const backtick = `Backtick sakinys.`;
const backtick12 = `vienguba (') ir dviguba (") kabute`;
console.log(backtick12);

const backtick123 = `vienguba ('), dviguba (") ir backtick (\`) kabutes`;
console.log(backtick123);

console.clear();

const backtickGelytes = `As turiu ${gele}, kuri yra ${spalva}.`;
console.log(backtickGelytes);

const n1 = 77;
const n2 = 55;
const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

console.clear();

const s1 = "stai sarasas:";
const s2 = "- pirmas";
const s3 = "- antras";
const s4 = "- trecias";
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

const eilutes = "Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias";

console.log(eilutes);

// 


