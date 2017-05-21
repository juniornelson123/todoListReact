import axios from 'axios'

const URL = "http://localhost:3000/todos"

export const changeDescription = (event) => ({
	type: 'DESCRIPTION_CHANGED',
	payload: event.target.value
})

export const search = () => {
	const request = axios.get(URL)
	return {
		type: "TODO_SEARCHED",
		payload: request
	}
}

export const add = (description) => {
	return dispatch => {
		axios.post(URL, {description: description})
			.then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
			.then(resp => dispatch(search()))
	}
}

export const markAsDone = (todo) => {
	return dispatch => {
		axios.put(`${URL}/${todo._id}`, {done: true})
			.then(resp => dispatch({ type: 'MARK_DONE', payload: resp.data }))
			.then(resp => dispatch(search()))
	}
}

export const markAsPendent = (todo) => {
	return dispatch => {
		axios.put(`${URL}/${todo._id}`, {done: false})
			.then(resp => dispatch({type: 'MARK_PENDENT', payload: resp.data}))
			.then(resp => dispatch(search()))
	}
}

export const removeTodo = (todo) => {
	return dispatch => {
		axios.delete(`${URL}/${todo._id}`)
			.then(resp => dispatch({type: 'REMOVE', payload: resp.data}))
			.then(resp => dispatch(search()))
	}
}