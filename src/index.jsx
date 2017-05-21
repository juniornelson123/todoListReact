import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AppComponent from './main/app.jsx'
import reducers from './main/reducers'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
	<Provider store={store}>
		<AppComponent/>
	</Provider>
	, document.getElementById("app"))