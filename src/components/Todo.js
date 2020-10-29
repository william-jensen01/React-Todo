import React from 'react';

const Todo = (props) => {
    const handleClick = () => {
        props.toggleCompleted(props.task.id);
    };

    return (
        <div onClick={handleClick} className={`task${props.task.completed ? " completed" : ""}`}>
            <p>{props.task.taskName}</p>
        </div>
    );
};
export default Todo;