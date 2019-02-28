const express = require('express');
const app = express();
const fs = require('fs');

let students = [];

let events = [];


fs.readFile('students.json', (err, data) => {
    students = JSON.parse(data);  
})

fs.readFile('events.json', (err, data) => {
    events = JSON.parse(data);
})

app.use(express.static('public'));
app.use(express.json());

app.get('/',(req, res) => {
   
});

app.post('/answer',(req, res) => {
    let ans = req.body.answer;
    for (let i = 0; i < students.length; i++) {
        if (ans == students[i].Student_Number) {
            res.send(students[i]);
        }
    }
})

app.listen(3000, () => {
    console.log('THE CRUSADE HAS BEGUN! TO WAR, COMRADES!');
});
