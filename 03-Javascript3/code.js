
function summerer(tall1, tall2) {
    let sum = tall1 + tall2;
    console.log("Summen er: " + sum);
    return sum;
}

let antallTimer = 90;
let antallVikarTimer= 30

let summertAntallTimer = summerer(antallTimer, antallVikarTimer);

let overskrift = document.createElement("h1");
overskrift.textContent = "Du har totalt jobbet: " + summertAntallTimer + " timer";
document.body.appendChild(overskrift);

document.getElementById("knapp").addEventListener("click", siHei)

function siHei() {
    console.log("Hei!");
}

document.getElementById("knapp").addEventListener("click", function() {
    console.log("Hade");
});

document.getElementById("knapp").addEventListener("click", () => {
    console.log("Hade igjen");
});