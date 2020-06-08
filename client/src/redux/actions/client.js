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
