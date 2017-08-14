import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(e){
    e.preventDefault();
    this.props.addTodo(this.refs.text.value);
    this.refs.addForm.reset();
  }
  render(){
    return(
      <form ref="addForm" onSubmit={this.addTodo}>
        <input type="text" ref="text" name="" id="" />
        <input type="submit" value="Add" />  
      </form>
    )
  }
}

export default Form;