// pages/Manager.js
import { useState } from "react";
import { useEffect } from "react";

const Manager = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //Fetch tasks from the datebase
        //Set tasks in state
    },[]);

    const handleApproveTask = (task) => {
        //Approve task
        // Approve tasks in state
    };

    const handleRejectTask = (task) => {
        //Reject task in the datebase
        //Reject tasks in state
    };

    return (
        <div>
            <h1>Manager Page</h1>
            <button onClick={() => handleApproveTask()}>Approve Task</button>
            <button onClick={() => handleRejectTask()}>Reject Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Manager;