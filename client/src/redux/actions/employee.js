import api from '../../utils/api';
import {
	ADD_EMPLOYEE_REQUEST,
	ADD_EMPLOYEE_FAIL,
	ADD_EMPLOYEE_SUCCESS,
	LOAD_COWORKER_REQUEST,
	LOAD_COWORKER_FAIL,
	LOAD_COWORKER_SUCCESS
} from '../consts';
import { setAlert } from '../actions/alerts';

export const addEmployee = formData => async dispatch => {
	const body = JSON.stringify({ ...formData });
	dispatch({
		type: ADD_EMPLOYEE_REQUEST
	});
	try {
		const res = await api.post('/employee', body);

		dispatch({
			type: ADD_EMPLOYEE_SUCCESS,
			payload: res.data
		});
		dispatch(setAlert(` Employee ${formData.firstname} ${formData.lastname} saved successfully`, 'success'));
	} catch (error) {
		dispatch({
			type: ADD_EMPLOYEE_FAIL,
			payload: error.response.data
		});
		dispatch(setAlert(`Error ${error.response.data.msg}`, 'danger'));
	}
};

export const loadCoworkers = () => async dispatch => {
    dispatch({
		type: LOAD_COWORKER_REQUEST
	});
	try {
		const res = await api.get('/employee');

		dispatch({
			type: LOAD_COWORKER_SUCCESS,
			payload: res.data
		});
		
	} catch (error) {
		dispatch({
			type: LOAD_COWORKER_FAIL,
			payload: error.response.data
		});
		dispatch(setAlert(`Error ${error.response.data.msg}`, 'danger'));
	}
};
