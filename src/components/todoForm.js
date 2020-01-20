import React, {Component} from 'react';

class TodoForm extends Component{
	  constructor(){
    super();
    this.state = {
      title:'',
      responsible: '',
      description: '',
      priority: 'low'
      };
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e){
  	const { value, name } = e.target;
  	this.setState({
  		[name]: value
  	});
  	
  }
  handleSubmit(e){
  	e.preventDefault();
  	this.props.onAddTodo(this.state);

  	
  }

	render(){
		return(
			
			<div className="card">
			<form className="card-body" onSubmit={this.handleSubmit}>
				<div className="form-group">

					<input type="text"
						   name="title"
						   onChange={this.handleInput}
						   className="form-control"
						   placeholder="Title"/> 
				</div>
				<div className="form-group">

					<input type="text"
						   name="responsible"
						   onChange={this.handleInput}
						   className="form-control"
						   placeholder="Responsible"/> 
				</div>
				<div className="form-group">

					<input type="text"
						   name="description"
						   onChange={this.handleInput}
						   className="form-control"
						   placeholder="Description"/> 
				</div>
				<div className="form-group">

					<select className="form-control" name="priority" onChange={this.handleInput}>
					<option name="low" value="low">low</option>
					<option name="medium" value="medium">medium</option>
					<option name="high" value="high">high</option>

					</select>
				</div>
				<button  className="btn btn-success">Crear</button >


			</form>
			
			</div>
	)
	}

}export default TodoForm;