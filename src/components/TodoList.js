import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-list">
            {props.tasks.map((item) => (
                <Todo key={item.id} task={item} toggleCompleted={props.toggleCompleted} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
};
export default TodoList;