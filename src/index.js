import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// CSS reset
import './index.css';

// Components
import App from './App';
import { Auth, Login } from './components/index.js'

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import { UserReducer } from './store/reducers/UserReducer.js';

let store;
if (process.env.NODE_ENV === 'development') {
	store = createStore(UserReducer, applyMiddleware(thunk, logger));
} else {
	store = createStore(UserReducer, applyMiddleware(thunk));
}

const AuthComp = Auth(App)(Login);

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<Route path = '/' component = { AuthComp } />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
