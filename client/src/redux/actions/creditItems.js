import {
  LOAD_CREDITITEMS_REQUEST,
  LOAD_CREDITITEMS_FAIL,
  LOAD_CREDITITEMS_SUCCESS,
  LOAD_ALLCREDITITEMS_REQUEST,
  LOAD_ALLCREDITITEMS_FAIL,
  LOAD_ALLCREDITITEMS_SUCCESS,
  LOAD_CREDITITEM_REQUEST,
  LOAD_CREDITITEM_FAIL,
  LOAD_CREDITITEM_SUCCESS,
} from "../consts";

import api from "../../utils/api";

export const getClientCreditReport = clientId => async dispatch => {
  console.log("loading credit ");
  dispatch({
    type: LOAD_CREDITITEMS_REQUEST,
  });
  try {
    const res = await api.get(`/credit-items/person/${clientId}`);
    dispatch({
      type: LOAD_CREDITITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LOAD_CREDITITEMS_FAIL });
  }
};

export const getCreditItemById = id => async dispatch => {
  dispatch({
    type: LOAD_CREDITITEM_REQUEST,
  });
  try {
    const res = await api.get(`/credit-items/${id}`);
    dispatch({
      type: LOAD_CREDITITEM_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LOAD_CREDITITEM_FAIL });
  }
};
export const getALLClientCreditReport = id => async dispatch => {
  dispatch({
    type: LOAD_ALLCREDITITEMS_REQUEST,
  });
  try {
    const res = await api.get(`/credit-items/all/person/${id}`);
    dispatch({
      type: LOAD_ALLCREDITITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LOAD_ALLCREDITITEMS_FAIL });
  }
};
