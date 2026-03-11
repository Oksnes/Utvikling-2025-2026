async function hentfjellinfo() {
    const response = await fetch('/fjellinfo');
    const data = await response.json();
    console.log(data);


    for (let fjell of data) {
        const fjellInfoDiv = document.createElement('div');
        fjellInfoDiv.classList.add('fjellside');
        fjellInfoDiv.innerHTML = `
            <h2>${fjell.fjellnavn}</h2>
            <p>Høyde: ${fjell.hoyde} m</p>
            <p>${fjell.beskrivelse}</p>
            <img src="bilder/${fjell.foto}" alt="${fjell.fjellnavn}" style="width:300px;">
        `;
        document.body.appendChild(fjellInfoDiv);
    }
}

hentfjellinfo()