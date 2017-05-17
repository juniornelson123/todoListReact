import React, {Component} from 'react'
import PageHeader from '../templates/pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'
import axios from 'axios'

const URL = "http://localhost:3000/todos"
export default class Todo extends Component{
	constructor(props){
		super(props)
		this.state = {description: "", list: []}

		this.handleAdd = this.handleAdd.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		
		this.refresh()
	}

	refresh(){

		axios.get(URL)
			.then(resp => {this.setState({...this.state, description: '', list: resp.data})})
	}

	handleChange(e){
		this.setState({...this.state, description: e.target.value})
	}

	handleRemove(todo){
		axios.delete(`${URL}/${todo._id}`)
			.then(resp => this.refresh())
	}

	handleAdd(){
		axios.post(URL,{description: this.state.description})
			.then(resp => this.refresh())
	}

	render(){
		return(
			<div>
				<PageHeader name="Todo" small="tarefas" />
				<TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} />
				<TodoList list={this.state.list} handleRemove={this.handleRemove}/>
			</div>
		)
	}
}