const uuidv4 = require('uuid/v4');


let data = [
    {
        id: uuidv4(),
        description: "Get some milk",
        type: "buy",
        dueDate: "2019-02-06T11:45:11+00:00",
        isDone: false
    }
]

function getTodos()
{
    return data;
}

function addTodo(description, dueDate, type)
{
    data.push({
        id: uuidv4(),
        description: description,
        type: type,
        dueDate: dueDate,
        isDone: false
    });
}

function toggleDone(todoId)
{
    for(let i = 0; i < data.length; i++)
    {
        if(data[i].id == todoId)
        {
            data[i].isDone = !data[i].isDone;
            return;
        }
    }
}


module.exports = {
    getTodos,
    addTodo,
    toggleDone
}