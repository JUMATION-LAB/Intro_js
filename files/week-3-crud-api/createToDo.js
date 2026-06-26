  const createToDo = (req, res)=>{

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
        const todoExists = todos.some((todo) => todo.title === title );

        if(!todoExists){
            todos = [...todos, newTodo];
            console.log(todos)
            res.status(201).json(todos);

        } else res.status(400).json('To do already exists.');
    }
    };

export default createToDo;