import React, { useEffect, Fragment } from 'react';
import Alert from './component/Alert';
import './App.css';
//Routing ..

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';

//Redux

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Fragment>
					<Alert />
					<Switch>Hello From React</Switch>
				</Fragment>
			</div>
		</Provider>
	);
}

export default App;
