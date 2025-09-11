const overskrift = document.createElement("h1");
overskrift.textContent = "overskrift"
document.body.appendChild(overskrift);

const knapp = document.createElement("button");
knapp.innerText = "Trykk på meg"
knapp.id = "knapp1"
knapp.addEventListener("click", trykk)
document.body.appendChild(knapp);

const knapp2 = document.createElement("button");
knapp2.innerText = "Trykk på meg"
knapp2.id = "knapp2"
knapp2.addEventListener("click", trykk)
document.body.appendChild(knapp2);

const bilde = document.createElement("img")
bilde.src="../03-Javascript/erm.png"
bilde.width = "200"
document.body.appendChild(bilde)

function trykk(evt) {
    console.log(evt.target.id)
}