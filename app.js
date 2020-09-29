const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', async (req, res) =>  {
    res.send('Welcome to the Estim API!')
});

// workers routes
app.use('/workers', require('./routes/workers'));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// server
module.exports = app;