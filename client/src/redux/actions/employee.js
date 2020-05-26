import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_FAIL,
    ADD_EMPLOYEE_SUCCESS,
} from '../consts';
import { setAlert } from '../actions/alerts';
import axios from 'axios';
//import { authMiddleWare } from '../../util/auth';


export const addEmployee = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ ...formData });
    dispatch({
        type: ADD_EMPLOYEE_REQUEST
    });
    try {
        const res = await axios.post('api/afilliate', body, config);

        dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert(` Employee ${formData.username} saved successfully`, 'success'));
    } catch (error) {

        dispatch({
            type: ADD_EMPLOYEE_FAIL,
            payload: error.response.data
        });
        dispatch(setAlert(`Error ${error.response.data.msg}`, 'danger'));
    }

}