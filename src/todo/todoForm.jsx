import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../templates/iconButton.jsx'
import Grid from '../templates/grid.jsx'

import {changeDescription,search, add} from './todoActions'

class TodoForm extends Component{
	
	componentWillMount(){
		this.props.search()
	}

	render(){
		return(
			<div role="form" className="todoForm">
				<Grid cols = "12 9 10">
					<input id="description" value={this.props.description} onChange={this.props.changeDescription} className="form-control" placeholder="Adicionar uma tarefa"/>
				</Grid>

				<Grid cols="12 3 2">
					<IconButton style="primary" icon="plus" onClick={() => this.props.add(this.props.description)}/>
				</Grid> 
			
			</div>
		)
	}
}

const mapStateToProps = state =>({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)