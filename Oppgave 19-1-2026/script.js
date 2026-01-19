const personer = [
    { navn: "Ola", alder: 25 },
    { navn: "Kari", alder: 30 },
    { navn: "Per", alder: 20 },
    { navn: "Lise", alder: 35 },
    { navn: "Nina", alder: 15 },
    { navn: "Morten", alder: 17 }
];

const voksne = personer.filter(person => person.alder >= 18);
console.log("Voksne personer:");
console.table(voksne);

const personOver30 = personer.find(person => person.alder > 30);
console.log("Første person over 30 år:");
console.table(personOver30);

const navnArray = personer.map(person => person.navn);
console.log("Array med navn på alle personer:");
console.table(navnArray);

const totalAlder = personer.reduce((sum, person) => sum + person.alder, 0);
console.log("Total alder for alle personer:");
console.log(totalAlder);

const harVoksen = personer.some(person => person.alder >= 18);
console.log("Er det minst én voksen person?");
console.log(harVoksen);

const alleVoksne = personer.every(person => person.alder >= 18);
console.log("Er alle personer voksne?");
console.log(alleVoksne);

const sortertEtterAlder = personer.slice().sort((a, b) => a.alder - b.alder);
console.log("Personer sortert etter alder:");
console.table(sortertEtterAlder);