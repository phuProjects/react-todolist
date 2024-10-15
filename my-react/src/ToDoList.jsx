import React, {useState} from 'react'

export default function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast"]) //store tasks
    const [newTask, setNewTask] = useState("") //store new task inputs
    
    function handleTaskChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if (input.trim() === "")return //prevent adding empty tasks
        setTasks([...tasks, inputValue])
        setNewTask("")
    }

    function deleteTask(){
    }

    return(
        <div className="todolist-container">
            <h1>To Do List</h1>

        
            <div>
                <input type="text"
                       placeholder="Enter a new task" 
                       value={newTask}
                       onChange={handleTaskChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}