import {
    FETCH_PHONETAG_REQUEST, FETCH_PHONETAG_SUCCESS, FETCH_PHONETAG_FAIL
} from '../consts';
import { setAlert } from '../actions/alerts';
import axios from 'axios';
//import { authMiddleWare } from '../../util/auth';


export const loadPhonetag = () => async dispatch => {
    dispatch({
        type: FETCH_PHONETAG_REQUEST
    });
    try {
        const res = await axios.get('http://localhost:5000/api/phonetag');
        console.log(res.data)
        dispatch({
            type: FETCH_PHONETAG_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_PHONETAG_FAIL,
            payload: error.response.data
        });
        dispatch(setAlert(`Error ${error.response.data.msg}`, 'danger'));
    }

}