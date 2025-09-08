let bildeElement = document.getElementById("bilde");
let beskrivelseElement = document.getElementById("beskrivelse");

let bilder = [
    "bilde1.jpg",
    "bilde2.jpg",
    "bilde3.jpg"
]

let bildeBeskrivelser = [
    "Dette er bilde 1",
    "Dette er bilde 2",
    "Dette er bilde 3"
]

let index=0
bildeElement.src = bilder[index];
beskrivelseElement.textContent = bildeBeskrivelser[index];


document.getElementById("knapp").addEventListener("click", function() {
    index++;
    if (index >= bilder.length) {
        index = 0;
    }
    bildeElement.src = bilder[index];
    beskrivelseElement.textContent = bildeBeskrivelser[index];
})
