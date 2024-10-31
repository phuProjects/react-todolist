import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat", "Sleep"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("") 
        }
    }
    function removeTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        
    }
    function moveTaskDown(index){
        
    }

    return(
        <div className="container">
            <div className="To-Do-List">
                <h1>To-Do-List</h1>
                    <div>
                        <input  
                            type="text"
                            placeholder="Enter a Task"
                            value={newTask}
                            onChange={handleInputChange}/>
                        <button 
                            className="add-button" 
                            onClick={addTask}>
                            Add Task
                        </button>
                    </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button onClick={() => removeTask(index)}>Remove</button>
                            <button onClick={() => moveTaskUp(index)}>Up</button>
                            <button onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}
export default ToDoList