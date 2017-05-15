import React from 'react'
import {Router, Route,Redirect, hashHistory, Switch} from 'react-router' 
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

import Todo from '../todo/todo.jsx'
import About from '../about/about.jsx'

export default props => (

	<Router history={hashHistory}>
    <Route path="/" component={Todo}/>
  </Router>
	
)