const express = require('express');
const fs = require('fs'); // failų sistemos modulis-biblioteka
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser'); // cookie analizės tarpinis programinis įrankis (middleware)
const port = 80;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

// Cookie analizės tarpinis programinis įrankis (middleware)
app.use(cookieParser());


app.use(express.static('public'));




// Dalis Router
app.get('/', (req, res) => {

    res.send('Hello Racoon! This is version 047 with auto-restart on code changes.');

});

// skaitome cookie iš kliento
app.get('/get-cookie', (req, res) => {
    // req - iš naršyklės atsiųstas užklausos objektas
    // req.cookies - iš naršyklės atsiųsto užklausos objekto, cookies objektas
    // req.cookies.manoSaldainis - iš naršyklės atsiųsto užklausos objekto, cookies objekto, manoSaldainis reikšmė
    const cookie = req.cookies.manoSaldainis || 'Nėra cookie';

    res.send(`Cookie gautas sėkmingai: ${cookie}`);
});

// duodame cookie klientui
app.get('/set-cookie', (req, res) => {
    res.cookie('manoSaldainis', 'CukrinisBebras', { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    res.send('Cookie nustatytas sėkmingai!');
});

// triname cookie naršyklėje
app.get('/delete-cookie', (req, res) => {
    // funkcija res.clearCookie('cookieName') - ištrina cookie naršyklėje
    // cookieName - cookie pavadinimas
    res.clearCookie('manoSaldainis');
    res.send('Cookie ištrintas sėkmingai!');
});




app.get('/profile', (req, res) => {
    res.send('Tai yra tavo profilis. Tik prisijungę vartotojai gali matyti šį puslapį.');
});


// Prisijungimo puslapis
app.get('/login', (req, res) => {
    // Paprastas prisijungimo forma
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Vartotojo vardas" required />
            <input type="password" name="password" placeholder="Slaptažodis" required />
            <button type="submit">Prisijungti</button>
        </form>
    `);
});



// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});