import React, {Component} from 'react'
import IconButton from '../templates/iconButton.jsx'
import Grid from '../templates/grid.jsx'

export default class TodoForm extends Component{
	render(){
		return(
			<div role="form" className="todoForm">
				
				<Grid cols = "12 9 10">
					<input id="decription" value={this.props.description} onChange={this.props.handleChange} className="form-control" placeholder="Adicionar uma tarefa"/>
				</Grid>

				<Grid cols="12 3 2">
					<IconButton style="primary" icon="plus" onClick={this.props.handleAdd}/>
				</Grid> 
			
			</div>
			
		)
	}
}