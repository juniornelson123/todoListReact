import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../templates/iconButton.jsx'
import {markAsDone, markAsPendent , removeTodo} from './todoActions'

class TodoList extends Component{
	
	renderRows(){
		const list = this.props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? "mark-done" : ""}>{todo.description}</td>
				<td >
					<IconButton style="success"  icon="check-circle-o" hide={todo.done} onClick={() => this.props.markAsDone(todo)}/>
					<IconButton style="warning" icon="refresh" hide={!todo.done} onClick={() => this.props.markAsPendent(todo)}/>
					<IconButton style="danger" icon="trash-o" hide={!todo.done} onClick={() => this.props.removeTodo(todo)}/>
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


const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPendent, removeTodo}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)