import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoTask: ""
        };
    };
    
    handleChanges = (e) => {
        this.setState({
            todoTask: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoTask);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="...todo" type="text" name="task" value={this.state.todoTask} onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;