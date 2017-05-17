import React from 'react'
import {HashRouter,Route, Redirect, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

import Todo from '../todo/todo.jsx'
import About from '../about/about.jsx'

export default props => (

	<HashRouter>
		<Switch>
	    <Route path="/todos" component={Todo}/>
	    <Route path="/about" component={About}/>
	    <Redirect from="*" to="/todos" />
    </Switch>
  </HashRouter>
	
)