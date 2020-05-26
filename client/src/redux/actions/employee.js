import api from '../../utils/api';
import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_FAIL,
    ADD_EMPLOYEE_SUCCESS,
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

}