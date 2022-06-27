const express = require('express');
const cors = require('cors');

const app = express();

const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController');

app.use(cors());
app.use('/students', studentsController);
app.use('/names', namesController);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

module.exports = app;
