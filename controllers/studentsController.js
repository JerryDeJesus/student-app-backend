const express = require('express');
const res = require('express/lib/response');
const controller = express.Router();
const studentData = require('../studentData.json');

controller.get('/', (req, res) => {
    res.json({studentData})
});

controller.get('/:id', (req, res) => {
    try{
        const studentId = req.params.id;

        if(!/[0-9]/.test(studentId)){
            res.send('Student id must be a number.')
            return
        }

        const singleStudent = studentData.students.find(student => student.id === studentId);

        if(singleStudent){
            res.json({singleStudent})
        }else{
            res.send('Student not found')
        }
    }catch(err){
        res.status(500).send('error occurred.')
    }
});


module.exports = controller;