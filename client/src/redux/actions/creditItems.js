import {
  LOAD_CREDITITEMS_REQUEST,
  LOAD_CREDITITEMS_FAIL,
  LOAD_CREDITITEMS_SUCCESS,
} from "../consts";

import api from "../../utils/api";

export const getClientCreditReport = id => async dispatch => {
  console.log("loading credit ");
  dispatch({
    type: LOAD_CREDITITEMS_REQUEST,
  });
  try {
    const res = await api.get("/credit-items/person/5ee821d6e79bf43594c91f74");
    dispatch({
      type: LOAD_CREDITITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: LOAD_CREDITITEMS_FAIL });
  }
};
