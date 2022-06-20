const express = require('express');
const controller = express.Router();
const repeatNTimesWithSpace = require('../utils/stringUtils');

controller.get('/:name/:times', (req,res) => {
    try {
        //get name
        const name = req.params.name;
        //get times
        const times = req.params.times;
        //get result of repeatNTimesWithSpace
        const repeatedName = repeatNTimesWithSpace(name, times);
        //send string response of result
        res.send(repeatedName);
    } catch (error) {
        res.send('There was an error.')
    }
})

module.exports = controller;