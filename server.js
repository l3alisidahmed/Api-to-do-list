let tasks = ['hello', 'sido', 'how', 'are', 'you', '?'];
const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
    res.send    (tasks);
});

app.post("/add/:task", (req, res) => {
    new_task = [tasks.push(req.params.task)];
    tasks.concat(new_task);
    res.send    (tasks);
});

app.delete("/delete/:indice", (req, res) => {
    let i = 0;
    const new_tasks = [];
    
    while (i < tasks.length) {
        if (i !== parseInt(req.params.indice)) {
            new_tasks.push(tasks[i]);
        }
        i++;
    }
    
    tasks = new_tasks;

    res.send(tasks);
});

app.put("/update/:indice/:new_task", (req, res) => {
    let i = 0;

    while (i < tasks.length) {
        if (i == parseInt(req.params.indice)) {
            tasks[i] = req.params.new_task;
        }
        i++;
    }

    res.send(tasks);
});



