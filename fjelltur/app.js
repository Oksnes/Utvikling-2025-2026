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

app.listen(PORT, () => {
    console.log(`Server kjører på http://localhost:${PORT}`);
});