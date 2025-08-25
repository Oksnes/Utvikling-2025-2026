const skjema = document.getElementById('skjema');
const resultat = document.getElementById('resultat');


skjema.addEventListener('submit', function(e) {
    e.preventDefault();

    const navn = document.getElementById('name').value.trim();
    const epost = document.getElementById('email').value.trim();
    const fag = document.getElementById('fag').value;
    const melding = document.getElementById('melding').value.trim();


    resultat.innerHTML = `
    <h3>Takk for besvarelsen</h3>
    <p><strong>Navn:</strong> ${navn || '(ikke oppgitt)'}</p>
    <p><strong>E-post:</strong> ${epost || '(ikke oppgitt)'}</p>
	<p><strong>Favorittfag:</strong> ${fag}</p>
	<p><strong>Melding:</strong> ${melding || '(ingen melding)'}</p>
    `
});


