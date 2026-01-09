let personer = ["Tim", "Felix", "Alex", "Mathias", "Benedikte", "Jo Bjørnar", "Liam", "Adrian", "Elias", "Madelene"]

let utvalgtePersoner = []

let antallVinnere = 2

for (let i = 0; i < antallVinnere; i++) {
    let tilfeldigTall = Math.floor(Math.random()*personer.length)
    let valgdtPerson = personer[tilfeldigTall]
    utvalgtePersoner.push(valgdtPerson)
    personer.splice(tilfeldigTall, 1)
    console.log(valgdtPerson, "vant.")
}

console.log("De som ikke vant: " + personer)