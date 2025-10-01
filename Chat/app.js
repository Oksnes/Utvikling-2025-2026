//server bit
const express = require('express');
const app = express();

//database bit
const db = require('better-sqlite3')('Chat.db');

//port
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/hentMeldinger', (req, res) => {
    const row = db.prepare('SELECT * FROM Melding').all();
    res.json(row);
});
    


//åpner port på serveren
app.listen(PORT, () => {
  console.log(`Serveren kjører på http://localhost:${PORT}`);
});