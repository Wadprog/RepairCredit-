import api from "../../utils/api";
import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  ADD_PERSON_REQUEST,
  ADD_PERSON_FAIL,
  ADD_PERSON_SUCCESS,
} from "../consts";

import { setAlert } from "./alerts";

export const loadCustomers = () => async dispatch => {};

export const loadCoworkers = () => async dispatch => {
  dispatch({
    type: LOAD_COWORKER_REQUEST,
  });
  try {
    const res = await api.get("/person/cowrokers");

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
export const addPerson = formData => async dispatch => {
  dispatch({
    type: ADD_PERSON_REQUEST,
  });
  const body = JSON.stringify(formData);
  try {
    const res = await api.post("/person", body);

    dispatch({
      type: ADD_PERSON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PERSON_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
  }
};

export const loadClient = () => async dispatch => {};
