import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const tasks = [
  {
    taskName: "Lambda School",
    id: 123,
    completed: false,
  },
  {
    taskName: "Clean bedroom",
    id: 1234,
    completed: false,
  },
  {
    taskName: "Organize pantry",
    id: 12345,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      tasks
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (newTaskName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {taskName: newTaskName, id: Date.now(), completed: false}
      ]
    });
  };

  toggleCompleted = (taskId) => {
    console.log(taskId);
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
