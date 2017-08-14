import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }
  addTodo = (item) => {
    var todo ={
      id: (new Date()).getTime(),
      text: item,
      status: false
    }
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }
  removeTodo = (index) =>{
    this.state.todos.splice(index,1);
    this.setState({todos: this.state.todos});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
