const express = require('express');
const app = express();
const fs = require('fs');

var students = [];
var student;
var events = [];
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
    //let package = {choice,events}
    writeEvent(choice,student)
})

app.get('/join',(req, res) => {
    //res.send(events);
    //if I have to, run through events array and send the object.
});

app.post('/answer',(req, res) => {
    let ans = req.body.answer;
    for (let i = 0; i < students.length; i++) {
        if (ans == students[i].Student_Number) {
            student = students[i];
            grade = students[i].Grade_Level;
            let array = studentHandler(grade);
            let package = {array, student};
            res.send(package);
    }

    }})
function studentHandler(grade) {
    let array = [];
    if (grade == 9) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].Freshman_Enlisted < events[i]["Per Grade"]) {
                array.push(events[i])
            }
        }
        console.log(array);
        return  array;
    }
        if (grade == 10) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].Sophmores_Enlisted < events[i]["Per Grade"]) {
                array.push(events[i])
            }
        }
            console.log(array);
        return  array;
    }
        if (grade == 11) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].Juniors_Enlisted < events[i]["Per Grade"]) {
                array.push(events[i])
            }
        }
            console.log(array);
        return  array;
    }
        if (grade == 12) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].Seniors_Enlisted < events[i]["Per Grade"]) {
                array.push(events[i])
            }
        }
            
        return  array;
    }
}

let writeEvent = (evt, st) => {
   st.event = evt.Event;
    for (let i = 0; i < events.length; i++) {
       if(evt.Event == events[i].Event) {
           if (st.Grade_Level == 9) {
               if (evt.Per_Grade > evt.Freshman_Enlisted) {
                                                                                                                           
               } else if (st.Per_Grade == evt.Freshman_Enlisted) {
                                                                                                                               
               }
           }
           if (st.Grade_Level == 10) {
               if (evt.Per_Grade > evt.Freshman_Enlisted) {
                                                                                                                           
               } else if (st.Per_Grade == evt.Freshman_Enlisted) {
                                                                                                                               
               }
           }
           if (st.Grade_Level == 11) {
               if (evt.Per_Grade > evt.Freshman_Enlisted) {
                                                                                                                           
               } else if (st.Per_Grade == evt.Freshman_Enlisted) {
                                                                                                                               
               }
           }
           if(st.Grade_Level == 12) {
               if (evt.Per_Grade > evt.Freshman_Enlisted) {
                     res.send("successful")                                                                                                      
               } else if (st.Per_Grade == evt.Freshman_Enlisted) {
                          res.send("failed")                                                                                                     
               }
           }
       }
    }
}

app.post('/signup')

app.listen(3000, () => {
    console.log('THE CRUSADE HAS BEGUN! TO WAR, COMRADES!');
});