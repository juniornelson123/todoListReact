import React, {Component} from 'react'
import IconButton from '../templates/iconButton.jsx'

export default class TodoList extends Component{

	renderRows(){
		return this.props.list.map(todo => (
			<tr key={todo._id}>
				<td>{todo.description}</td>
				<td><IconButton style="danger" icon="trash-o" onClick={() => this.props.handleRemove(todo)}/></td>
			</tr>
		))
	}
	render(){
		return(
			<table className="table">
				<thead>
					<tr>
						<th>Descrição</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		)
	}
}