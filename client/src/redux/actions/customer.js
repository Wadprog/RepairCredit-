import api from "../../utils/api";
import {
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_FAIL,
  UPDATE_CUSTOMER_REQUEST,
  UPDATED_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAIL,
  DELETE_CUSTOMER_FAIL,
  DELETE_CUSTOMER_SUCCESS,
} from "../consts";

import { setAlert } from "../actions/alerts";

export const loadClientById = id => async dispatch => {
  dispatch({
    type: GET_CUSTOMER_REQUEST,
  });

  try {
    const res = await api.get(`/client/${id}`);

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
export const loadCustomers = () => async dispatch => {
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
export const updateClient = formData => async dispatch => {
  dispatch({
    type: UPDATE_CUSTOMER_REQUEST,
  });
  const body = JSON.stringify(formData);
  try {
    const res = await api.put(`/customer/${formData.id}`, body);

    dispatch({
      type: UPDATED_CUSTOMER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CUSTOMER_FAIL,
    });
    // dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
  }
};

export const deleteCustomer = id => async dispatch => {
  try {
    let res = await api.delete(`/client/${id}`);
    dispatch({ type: DELETE_CUSTOMER_SUCCESS, payload: res.data });
    dispatch(setAlert(`Deleted with success`, "success"));
  } catch (error) {
    dispatch({ type: DELETE_CUSTOMER_FAIL });
    dispatch(setAlert(`error deleting ${error}`, "danger"));
  }
};