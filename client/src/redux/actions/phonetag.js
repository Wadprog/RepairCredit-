import api from '../../utils/api';
import {
    LOAD_PHONETAG_REQUEST, LOAD_PHONETAG_SUCCESS, LOAD_PHONETAG_FAIL
} from '../consts';
import { setAlert } from '../actions/alerts';


export const loadPhonetag = () => async dispatch => {
    dispatch({
        type: LOAD_PHONETAG_REQUEST
    });
    try {
        const res = await api.get('/phonetag');
        console.log(res.data)
        dispatch({
            type: LOAD_PHONETAG_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LOAD_PHONETAG_FAIL,
            payload: error.response.data
        });
        dispatch(setAlert(`Error ${error.response.data.msg}`, 'danger'));
    }

}