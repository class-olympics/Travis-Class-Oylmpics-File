const express = require('express');
const app = express();
const fs = require('fs');

let students = [];

let events = [];

var grade;
fs.readFile('students.json', (err, data) => {
    students = JSON.parse(data);  
})

fs.readFile('events.json', (err, data) => {
    events = JSON.parse(data);
})

app.use(express.static('public'));
app.use(express.json());

app.post('/signup', (req,res) => {
    let ans = req.body.options;
    let choice;
     for (i = 0; i < events.length; i++) {
         if (events[i].Event == ans) {
             choice = events[i];
         }
     }
    let package = {choice,grade,events}
    res.send(package);
    
})

app.get('/join',(req, res) => {
    res.send(events);
    //if I have to, run through events array and send the object.
});

app.post('/answer',(req, res) => {
    let ans = req.body.answer;
    for (let i = 0; i < students.length; i++) {
        if (ans == students[i].Student_Number) {
            res.send(students[i]);
            grade = students[i].Grade_Level;
        }
    }
})

app.listen(3000, () => {
    console.log('THE CRUSADE HAS BEGUN! TO WAR, COMRADES!');
});
