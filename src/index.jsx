import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppComponent from './main/app.jsx'
import reducers from './main/reducers'

const store = createStore(reducers)
ReactDOM.render(
	<Provider store={store}>
		<AppComponent/>
	</Provider>
	, document.getElementById("app"))