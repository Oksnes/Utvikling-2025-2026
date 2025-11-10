const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('better-sqlite3')('chat.db');

const app = express();
const PORT = 3000;

// Middleware for å parse JSON og URL-encoded data
app.use(express.static("public"));
app.use(express.json());

// Middleware for å håndtere sessions
app.use(session({
  secret: 'supersecretkey', // Endre denne til en sterk hemmelighet i produksjon
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Sett til true hvis du bruker HTTPS
}));