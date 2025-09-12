
let handlekurvHtml = document.getElementById("handlekurv");

let varerHtml = document.getElementById("varer");


let varer = [
    { navn: "Gulrot", pris: 14.90, bilde: "mat_19.png", handlekurv: 0 },
    { navn: "Rødløk", pris: 8.30, bilde: "mat_01.png", handlekurv: 0 },
    { navn: "Agurk", pris: 12.90, bilde: "mat_14.png", handlekurv: 0 },
    { navn: "Paprika", pris: 13.30, bilde: "mat_05.png", handlekurv: 0 },
    { navn: "Potet", pris: 3.90, bilde: "mat_13.png", handlekurv: 0 },
    { navn: "Tomat", pris: 4.90, bilde: "tomatBilde.png", handlekurv: 0 },
    { navn: "Fisk", pris: 25.90, bilde: "fiskBilde.png", handlekurv: 0 },
    { navn: "Brød", pris: 30.30, bilde: "brodBilde.png", handlekurv: 0 },
    { navn: "Kylling", pris: 25.90, bilde: "kyllingBilde.png", handlekurv: 0 },
    { navn: "Banan", pris: 15.90, bilde: "bananBilde.png", handlekurv: 0 },
    { navn: "Melk", pris: 20.90, bilde: "melkBilde.png", handlekurv: 0 },
];

for (let i = 0; i < varer.length; i++) {
    let varediv = document.createElement("div");
    varediv.className = "vare"
    
    let vareOverskrift = document.createElement("h3");
    vareOverskrift.innerText = varer[i].navn;

    let vareBilde = document.createElement("img");
    vareBilde.src = "medier/" + varer[i].bilde;

    let varePris = document.createElement("p");
    varePris.innerText = varer[i].pris +"0 kr";

    let vareKnapp = document.createElement("button");
    vareKnapp.innerText = "Kjøp";
    vareKnapp.id = i;
    vareKnapp.addEventListener("click", kjopVare);

    varediv.appendChild(vareOverskrift);
    varediv.appendChild(vareBilde);
    varediv.appendChild(varePris);
    varediv.appendChild(vareKnapp);

    varerHtml.appendChild(varediv);
}

function kjopVare(e) {
    let varenummer = e.target.id;

    varer[varenummer].handlekurv++;

    oppdaterHandlekurv();
}

function oppdaterHandlekurv() {
    let totalpris = 0;

    handlekurvHtml.innerHTML = "<h3> Handlekurv </h3>";

    for (let i = 0; i< varer.length; i++) {
        if (varer[i].handlekurv > 0) {
            let varepris = varer[i].pris * varer[i].handlekurv;

            totalpris += varepris;

            handlekurvHtml.innerHTML += "<p>" + varer[i].handlekurv + " x " + varer[i].navn + "(" + varepris.toFixed(2) + " kr)</p>";
        }
    }

    handlekurvHtml.innerHTML += "Totalpris: " + totalpris.toFixed(2) + " kr.";
}