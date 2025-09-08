let arrayNavn = ["Ola", "Kari", "Per"];

console.log(arrayNavn);

for (let navn of arrayNavn) {
    console.log(navn);
}

console.log(arrayNavn[1])

let person = {
    navn: "Olaien",
    alder: 250,
    yrke: "Utvikler"
}

console.log(person.alder)


let personListe = [
    {
        navn: "Ola",
        alder: 25,
    },
    {
        navn: "Kari",
        alder: 30,
    },
    {
        navn: "Per",
        alder: 28,
    }
];

// console.log(personListe)
// console.log(personListe[1])
// console.log(personListe[1].navn)

personListe.push(person)

// for (let person of personListe) {
//     console.log(person)
// }

console.log("\n")

for (let person of personListe) {
    if (person.alder >=30) {
        console.log(person)
        personListe.splice(personListe.indexOf(person), 1);
        console.log("Etter fjerning:")
        console.log(personListe)
    }
}

console.log("\n")

