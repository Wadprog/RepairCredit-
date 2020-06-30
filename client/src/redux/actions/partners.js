import api from "../../utils/api";
import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  LOAD_COWORKERS_REQUEST,
  LOAD_COWORKERS_FAIL,
  LOAD_COWORKERS_SUCCESS,
} from "../consts";

import {setAlert} from './alert'
export const loadCoworkers = () => async dispatch => {
  dispatch({
    type: LOAD_COWORKERS_REQUEST,
  });
  try {
    const res = await api.get("/person/cowrokers");

    dispatch({
      type: LOAD_COWORKERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_COWORKERS_FAIL,
      payload: error.response.data,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
  }
};
