import React, { useEffect, Fragment } from 'react';
import Alert from './components/Alert';
import './App.css';
//Routing ..

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//Redux

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Fragment>
					<Alert />
					Hello From React
					<Switch></Switch>
				</Fragment>
			</div>
		</Provider>
	);
}

export default App;
