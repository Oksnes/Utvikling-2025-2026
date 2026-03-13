async function hentPersoner() {
    const response = await fetch('/hentPersoner');
    const personer = await response.json();
    
    const dropdown = document.getElementById('brukernavn-dropdown');

    dropdown.innerHTML = '';

    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        dropdown.appendChild(option);
    }
}

hentPersoner();


async function hentFjell() {
    const response = await fetch('/hentFJellnavn');
    const fjellnavn = await response.json();
    
    const dropdown = document.getElementById('fjell-dropdown');
    dropdown.innerHTML = '';

    for (const fjell of fjellnavn) {
        const option = document.createElement('option');
        option.value = fjell.fjellnavn;
        option.textContent = fjell.fjellnavn;
        dropdown.appendChild(option);
    }
}

hentFjell();


document.getElementById('ny-tur-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const brukernavn = document.getElementById('brukernavn-dropdown').value;
    const fjellnavn = document.getElementById('fjell-dropdown').value;
    const tidspunkt = document.getElementById('tidspunkt').value;
    const varighet = document.getElementById('varighet').value;
    const beskrivelse = document.getElementById('beskrivelse').value;

    console.log({ brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse });


    const response = await fetch('/registrerTur', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse })
    });

    if (response.ok) {
        alert('Fjellturen er registrert!');
    } else {
        alert('Det skjedde en feil');
    }
});