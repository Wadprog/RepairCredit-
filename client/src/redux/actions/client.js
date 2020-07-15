import api from "../../utils/api";
import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
} from "../consts";
import { setAlert } from "../actions/alerts";

export const loadClient = () => async dispatch => {};
export const loadCoworkers = () => async dispatch => {
  dispatch({
    type: LOAD_COWORKER_REQUEST,
  });
  try {
    const res = await api.get("/persorn");

    dispatch({
      type: LOAD_COWORKER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_COWORKER_FAIL,
      payload: error.response.data,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
  }
};
export const updateClient = formData => async dispatch => {
  dispatch({
    type: UPDATE_CLIENT_REQUEST,
  });
  const body = JSON.stringify(formData);
  try {
    const res = await api.put(`/client/${formData.id}`, body);

    dispatch({
      type: UPDATED_CLIENT_SUCCESS,
      payload: res.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: UPDATED_CLIENT_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
    return false;
  }
};
