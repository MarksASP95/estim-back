const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// routes
app.get('/', async (req, res) =>  {
    res.send('Welcome to the Estim API!')
});

// workers
app.use('/workers', require('./routes/workers'));

// projects
app.use('/projects', require('./routes/projects'));

// tasks
app.use('/tasks', require('./routes/tasks'));


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// server
module.exports = app;