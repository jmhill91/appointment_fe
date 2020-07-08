const employDefault = false


export default (state = employDefault, action) => {

	switch (action.type){
		case 'EMPLOYEE_LOGIN_REQUEST':
			return true
		default:
			return state
	}
}