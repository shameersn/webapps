import React from 'react';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.renderTodo = this.renderTodo.bind(this);
  }
  renderTodo(item,index){
    return <li key={item.id}>{item.text} <span onClick={this.props.removeTodo.bind(this,index)}>&times;</span></li>
  }
  render(){
    return(
      <ul>
        {this.props.todos.map(this.renderTodo)}
      </ul>
    )
  }
}

export default TodoList;