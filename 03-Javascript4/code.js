

let form = document.getElementById("form");
form.addEventListener("submit", gjettTall)


let tall = Math.floor(Math.random() * 50) + 1;
console.log(tall); 


let antallGjett = 0;

function gjettTall(e) {

    antallGjett++;
    e.preventDefault();

    let valgtTall = document.getElementById("input").value;
    console.log(valgtTall);

    document.getElementById("gangerGjettet").innerText = "Du har gjettet: "+ antallGjett+ " ganger"
    console.log(antallGjett);
    if (valgtTall == tall) {
        document.getElementById("output").innerText = "Riktig tall!"
        antallGjett = 0;
    } else if (valgtTall < tall) {
        document.getElementById("output").innerText = "For lavt!"
    } else {
        document.getElementById("output").innerText = "For høyt!"
    }
};
