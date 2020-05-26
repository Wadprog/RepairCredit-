import api from '../../utils/api';

import {
	LOG_OUT,
	LOG_IN_FAIL,
	LOG_IN_SUCCESS,
	LOG_IN_REQUEST,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL
} from './../consts';

import { setAlert } from './alert';
import setAuthToken from '../../utils/setAuthToken';

/********************* LOG OUT Function*****************************/
export const logout = () => async dispatch => {
	dispatch({
		type: LOG_OUT
	});
};
/*************************LOG IN Function*************************/
export const login = ({ email, password }) => async dispatch => {
	const body = JSON.stringify({ email, password });

	try {
		dispatch({
			type: LOG_IN_REQUEST
		});

		const res = await api.post('/auth', body);
	
		dispatch({
			type: LOG_IN_SUCCESS,
			payload: res.data
		});
		dispatch(loadUser());
		dispatch(setAlert(`Welcome Back`, 'success'));
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: LOG_IN_FAIL
		});
	}
};
/*************************GET USER DETAILS*************************/

export const loadUser = () => async dispatch => {
	if (localStorage.token) setAuthToken(localStorage.token);
	try {
		dispatch({
			type: LOAD_USER_REQUEST
		});
		const res = await api.get('/api/auth');
		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: res.data
		});
	} catch (error) {
		console.log(error);
		dispatch(setAlert(`${error.response.data.msg} `, 'danger'));
		dispatch({
			type: LOAD_USER_FAIL
		});
	}
};
