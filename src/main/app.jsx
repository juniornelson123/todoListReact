import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React, {Component} from 'react'
import Menu from '../templates/menu.jsx'
import Routes from './routes.jsx'

export default class AppComponent extends Component{
	

	render(){
		return (
			<div className="container">
				<Menu />	
				<Routes />	
			</div>
		)
	}
}