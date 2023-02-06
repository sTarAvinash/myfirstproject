// pages/admin.js
import { useState } from "react";
import { useEffect } from "react";

const Admin = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //Fetch tasks from the datebase
        //Set tasks in state
    },[]);

    const handleCreateTask = (task) => {
        //Create task in the datebase
        // Update tasks in state
    };

    const handleUpdateTask = (task) => {
        //Update task in the datebase
        //Update tasks in state
    };

    const handleDeleteTask = (task) => {
        //Delete task from the datebase
        //Update tasks in state
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <button onClick={() => handleCreateTask()}>Create Task</button>
            <button onClick={() => handleUpdateTask()}>Update Task</button>
            <button onClick={() => handleDeleteTask()}>Delete Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;