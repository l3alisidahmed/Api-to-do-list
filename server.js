let tasks = ['hello', 'sido', 'how', 'are', 'you', '?'];
const express = require("express");
const app = express();

app.use(express.json());
app.listen(3000);

let toJson = (arr) => {
    var listOfTasks = []
    for (let index = 0; index < arr.length; index++) {
        var task = {
            "id": index,
            "title": arr[index]
        }
        listOfTasks.push(task)
    }

    return listOfTasks;
}

app.get("/", (req, res) => {
    var listOfTasks = toJson(tasks);
    res.send    (listOfTasks);
});

app.post("/add", (req, res) => {
    const jsonData = req.body
    tasks.push(jsonData["title"])
    var listOfTasks = toJson(tasks);
    res.send    (listOfTasks);
});

app.delete("/delete", (req, res) => {
    let i = 0;
    const new_tasks = [];
    const dataJson = req.body
    
    while (i < tasks.length) {
        if (i !== parseInt(dataJson["id"])) {
            new_tasks.push(tasks[i]);
        }
        i++;
    }
    
    tasks = new_tasks;
    var listOfTasks = toJson(tasks);

    res.send("Task has benn deleted");
});

app.put("/update", (req, res) => {
    let i = 0;
    const dataJson = req.body

    while (i < tasks.length) {
        if (i == parseInt(dataJson["id"])) {
            tasks[i] = dataJson["title"];
        }
        i++;
    }

    var listOfTasks = toJson(tasks);

    res.send(listOfTasks);
});



