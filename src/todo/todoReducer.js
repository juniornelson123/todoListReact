const INITIAL_VALUE = {description: '', list: []}


export default (state = INITIAL_VALUE, action) => {
	switch(action.type){

		case 'DESCRIPTION_CHANGED':
			return {...state, description: action.payload}
		case 'TODO_SEARCHED':
			return {...state, list: action.payload.data}
		case 'TODO_ADD':
			return {...state, list: action.payload.data}
		case 'MARK_DONE':
			return {...state, list: action.payload.data}
		case 'MARK_PENDENT':
			return {...state, list: action.payload.data}
		case 'REMOVE':
			return {...state, list: action.payload.data}	
		default:
			return state	
	}
}