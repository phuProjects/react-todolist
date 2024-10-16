import React, {useState} from 'react'

export default function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast"]) //store tasks
    const [newTask, setNewTask] = useState("") //store new task inputs
    
    function handleTaskChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){

        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    return(
        <div className="todolist-container">
            <h1>To Do List</h1>

        
            <div>
                <input type="text"
                       placeholder="Enter a new task" 
                       value={newTask}
                       onChange={handleTaskChange}/>

                <button className="add-button"
                        onClick={addTask}>Add Task</button>
            </div>

            <div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Del</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}