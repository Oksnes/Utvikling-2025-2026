
let handlekurvHtml = document.getElementById("handlekurv");

let varerHtml = document.getElementById("varer");


let varer = [
    { navn: "Gulrot", pris: 14.90, bilde: "mat_19.png", handlekurv: 0 },
    { navn: "Rødløk", pris: 8.30, bilde: "mat_01.png", handlekurv: 0 },
    { navn: "Agurk", pris: 12.90, bilde: "mat_14.png", handlekurv: 0 },
    { navn: "Paprika", pris: 13.30, bilde: "mat_05.png", handlekurv: 0 },
    { navn: "Potet", pris: 3.90, bilde: "mat_13.png", handlekurv: 0 },
    { navn: "Tomat", pris: 4.90, bilde: "mat_08.png", handlekurv: 0 }
];

for (let vare of varer) {
    let varediv = document.createElement("div");
    varediv.className = "vare"
    
    let vareOverskrift = document.createElement("h3");
    vareOverskrift.innerText = varer[vare].navn;

    let vareBilde = document.createElement("img");
    vareBilde.src = "medier/" + varer[vare].bilde;

    let varePris = document.createElement("p");
    varePris.innerText = varer[vare].pris +" kr";

    let vareKnapp = document.createElement("button");
    vareKnapp.innerText = "Kjøp";
    vareKnapp.id = varer[vare].navn;
    vareKnapp.addEventListener("click", kjopVare);

    varediv.appendChild(vareOverskrift);
    varediv.appendChild(vareBilde);
    varediv.appendChild(varePris);
    varediv.appendChild(vareKnapp);

    varerHtml.appendChild(varediv);
}

function kjopVare(event) {
    let varenummer = event.target.id;

    varer[varenummer].handlekurv++;

    oppdaterHandlekurv();
}

function oppdaterHandlekurv() {
    let totalpris = 0;

    handlekurvHtml.innerHTML = "<h3> Handlekurv </h3>";

    for (let vare of varer) {
        if (varer[vare].handlekurv > 0) {
            let varepris = varer[vare].pris * varer[vare].handlekurv;

            totalpris += varepris;

            handlekurvHtml.innerHTML += "<p>" + varer[vare].handlekurv + " x " + varer[vare].navn + "(" + varepris.toFixed(2) + " kr)</p>";
        }
    }

    handlekurvHtml.innerHTML += "Totalpris: " + totalpris.toFixed(2) + " kr.";
}