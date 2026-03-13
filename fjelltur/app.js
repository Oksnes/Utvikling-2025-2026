const express = require('express');
const app = express();
const db = require('better-sqlite3')('fjelltur.db');
const PORT = 3000;


app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/fjellinfo', (req, res) => {
    const stmt = db.prepare('SELECT fjellnavn, hoyde, beskrivelse, foto FROM fjell').all();
    res.json(stmt);
});

app.get('/hentPersoner', (req, res) => {
    const stmt = db.prepare('SELECT brukernavn FROM person').all();
    res.json(stmt)
});

app.get('/hentFjellnavn', (req, res) => {
    const stmt = db.prepare('SELECT fjellnavn FROM fjell').all();
    res.json(stmt);
});

app.get('/fjellturer/:brukernavn', (req, res) => {
    const brukernavn = req.params.brukernavn;
    if (!brukernavn) return res.status(400).json({ error: 'Mangler brukernavn' });

    const rows = db.prepare(`
        SELECT fjell.fjellnavn
        FROM person
        JOIN fjelltur ON person.brukernavn = fjelltur.brukernavn
        JOIN fjell ON fjelltur.fjell_id = fjell.fjell_id
        WHERE person.brukernavn = ?
    `).all(brukernavn);

    res.json(rows);
});

app.post('/registrerTur', (req, res) => {
    const { brukernavn, fjellnavn, tidspunkt, varighet, beskrivelse } = req.body;
    if (!brukernavn || !fjellnavn || !tidspunkt || !varighet) {
        return res.status(400).json({ error: 'Mangler nødvendige felt' });
    }
    const person = db.prepare('SELECT * FROM person WHERE brukernavn = ?').get(brukernavn);
    if (!person) return res.status(404).json({ error: 'Person ikke funnet' });

    const fjell = db.prepare('SELECT * FROM fjell WHERE fjellnavn = ?').get(fjellnavn);
    if (!fjell) return res.status(404).json({ error: 'Fjell ikke funnet' });

    db.prepare('INSERT INTO fjelltur (brukernavn, fjell_id, tidspunkt, varighet, beskrivelse) VALUES (?, ?, ?, ?, ?)')
    .run(brukernavn, fjell.fjell_id, tidspunkt, varighet, beskrivelse);

    res.status(201).json({ message: 'Fjellturen er registrert!' });
});


app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});