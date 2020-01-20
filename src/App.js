import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json';
import TodoForm from  './components/todoForm.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
      
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
 if (window.confirm('Are you sure you want to delete it?')) {
   this.setState({
    todos: this.state.todos.filter((e,i) =>{
      return i !== index
    })
  })
 }

  }

  

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
        <div className="card mt-5">
          <div className="card-header">
          <h3>{todo.title}</h3>
          <span className="badge badge-pill badge-danger">{todo.priority}</span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
            <hr/>
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Eliminar</button>

          </div>
        </div>
        </div>
        )
    })


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
            <a className="text-white">
              Tasks  
              <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>            
              </a>
          </nav>
          <div className="container">
            <div className="row 1">
            <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="row mt-4">
            { todos }
            
            </div>
            
          </div>
          
        
    </div>
  );
}
}
export default App;
