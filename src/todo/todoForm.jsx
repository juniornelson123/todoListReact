import React, {Component} from 'react'
import Grid from '../templates/grid.jsx'
import IconButton from '../templates/iconButton.jsx'

export default class TodoForm extends Component{
	render(){
		return(
			<div role="form" className="todoForm">
				<Grid cols="12 9 10">
					<input id="description" className="form-control" placeholder="Adicione uma tarefa"></input>		
				</Grid>
				
				<Grid cols="12 3 2">
					<IconButton style="primary" icon="plus"/>
				</Grid>
			</div>
		)
	}
}