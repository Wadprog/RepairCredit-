import api from "../../utils/api";
import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  ADD_PERSON_REQUEST,
  ADD_PERSON_FAIL,
  ADD_PERSON_SUCCESS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_FAIL,
} from "../consts";

import { setAlert } from "./alerts";

export const loadCustomers = () => async (dispatch) => {
  dispatch({
    type: GET_CUSTOMERS_REQUEST,
  });
  try {
    const res = await api.get("/person/customers");
    dispatch({
      type: GET_CUSTOMERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert(error, "danger"));
    dispatch({
      type: GET_CUSTOMERS_FAIL,
    });
  }
};

export const loadCoworkers = () => async (dispatch) => {
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
export const addPerson = (formData) => async (dispatch) => {
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
    return true;
  } catch (error) {
    dispatch({
      type: ADD_PERSON_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
    return false;
  }
};

export const loadClient = () => async (dispatch) => {};
export const loadClientById = (id) => async (dispatch) => {
  dispatch({
    type: GET_CUSTOMER_REQUEST,
  });

  try {
    const res = await api.get(`person/client/${id}`);

    dispatch({
      type: GET_CUSTOMER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CUSTOMER_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
  }
};
