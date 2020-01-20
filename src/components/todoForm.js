import React, {Component} from 'react';

class TodoForm extends Component{

	render(){
		return(
			
			<div className="card">
			<form className="card-body">
				<div className="form-group">

					<input type="text"
						   name="title"
						   className="form-control"
						   placeholder="Title"/> 
				</div>
				<div className="form-group">

					<input type="text"
						   name="responsible"
						   className="form-control"
						   placeholder="Responsible"/> 
				</div>
				<div className="form-group">

					<input type="text"
						   name="description"
						   className="form-control"
						   placeholder="Description"/> 
				</div>
				<div className="form-group">

					<select className="form-control">
					<option name="low" value="low">low</option>
					<option name="medium" value="medium">medium</option>
					<option name="high" value="high">high</option>

					</select>
				</div>
				<span className="btn btn-success">Crear</span>


			</form>
			
			</div>
	)
	}

}export default TodoForm;