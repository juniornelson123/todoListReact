import React, {Component} from 'react'
import IconButton from '../templates/iconButton.jsx'

export default class TodoList extends Component{
	constructor(props){
		super(props)
		console.log(props)
	}
	renderRows(){
		return this.props.list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? "mark-done" : ""}>{todo.description}</td>
				<td >
					<IconButton style="success"  icon="check-circle-o" hide={todo.done} onClick={() => this.props.handleDone(todo)}/>
					<IconButton style="warning" icon="refresh" hide={!todo.done} onClick={() => this.props.handlePendent(todo)}/>
					<IconButton style="danger" icon="trash-o" hide={!todo.done} onClick={() => this.props.handleRemove(todo)}/>
				</td>
			</tr>
		))
	}
	render(){
		return(
			<table className="table">
				<thead>
					<tr>
						<th>Descrição</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		)
	}
}