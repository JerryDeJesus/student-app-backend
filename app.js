const express = require('express');

const app = express();

const studentsController = require('./controllers/studentsController');

app.use('/students', studentsController);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

module.exports = app;
