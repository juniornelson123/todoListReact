const INITIAL_VALUE = {description: 'ok', list: []}


export default (state = INITIAL_VALUE, action) => {
	switch(action.type){

		case 'DESCRIPTION_CHANGED':
			return {...state, description: action.payload}
		default:
			return state	
	}
}