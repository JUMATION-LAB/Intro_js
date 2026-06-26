// import createToDo  from './createToDo.js';

const path = require('path');
require('dotenv').config();
// require('dotenv').config(path.join(__dirname ,'../', '../', '.env'));

const express = require('express');
const app = express();
const PORT = process.env.PORT

const createToDo = (req, res) => {

    let { isCompleted, titl } = req.body;
    let title = titl.trim();

    if (!isCompleted && !title) {
        res.status(400).json({ Error: `Input the required data.` });
    } else {
        let newTodo = {
            "id": todos.length + 1,
            "isCompleted": isCompleted,
            "title": title,
            "dueDate": (new Date().toISOString().split('T')[0])
        }

        //to check whether todo exists
        const todoExists = todos.some((todo) => todo.title === title);

        if (!todoExists) {
            todos = [...todos, newTodo];
            console.log(todos)
            res.status(201).json(todos);

        } else res.status(400).json('To do already exists.');
    }
};

//The function
app.use(express.json());

let todos = [
    {
        id: 1,
        title: "Review project proposal",
        isCompleted: true,
        dueDate: "2026-06-20"
    },
    {
        id: 2,
        title: "Schedule team sync",
        isCompleted: false,
        dueDate: "2026-06-23"
    },
    {
        id: 3,
        title: "Update API documentation",
        isCompleted: false,
        dueDate: "2026-06-25"
    }
];

app.get('/todos', (req, res) => {
    res.status(200).json(todos);
})

app.post('/addToDo', (req, res) => {
    createToDo(req, res);
})

app.delete('/addToDo/:that', (req, res) => {
    const initialLength = todos.length;
    const id = parseInt(req.params.that);

    const todoToDelete = todos.find(todo =>todo.id === id);
    res.send();

    console.log("todoToDelete");
    console.log(todoToDelete);
})






















console.log(PORT)

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})


