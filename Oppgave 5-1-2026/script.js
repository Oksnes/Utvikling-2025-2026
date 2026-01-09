let Personer = [
    "Ola Nordmann",
    "Kari Nordkvinne",
    "Per Hansen",
    "Lise Olsen",
    "Nina Johansen"
]

// let tilfeldigTall = Math.floor(Math.random() * Personer.length);

// console.log(tilfeldigTall);
// console.log(Personer[tilfeldigTall]);


let kopiPersoner = [...Personer]
let flerePersoner = []
for (let i = 0; i < 2; i++) {
    let tilfeldigTall = Math.floor(Math.random() * kopiPersoner.length)
    let valgdtPerson = kopiPersoner[tilfeldigTall]
    flerePersoner.push(valgdtPerson)
    kopiPersoner.splice(tilfeldigTall, 1)
}

console.log(flerePersoner)