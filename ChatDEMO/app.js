//server bit
const express = require('express');
const app = express();

//database bit
const db = require('better-sqlite3')('Chat.db');

//port
const PORT = 3000;

app.use(express.static('public'));

// Legg til body-parsing for skjema/JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/hentMeldinger', (req, res) => {
    const row = db.prepare('SELECT * FROM Melding').all();
    res.json(row);
});

app.post('/leggMelding', (req, res) => {
  try {
    let { navn, melding, tid } = req.body;
    navn = navn.toString().trim();
    melding = melding.toString().trim();
    tid = tid.toString().trim();

    db.prepare('INSERT INTO melding (Navn, Innhold, Tid) VALUES (?, ?, ?)')
    .run(navn, melding, tid);
    return res.sendStatus(201)
  } 
  catch (err) {
    console.error('Feil ved innsending av melding:', err);
    return res.status(500).json({ error: 'Kunne ikke lagre melding' });
  }
});


//åpner port på serveren
app.listen(PORT, () => {
  console.log(`Serveren kjører på http://localhost:${PORT}`);
});