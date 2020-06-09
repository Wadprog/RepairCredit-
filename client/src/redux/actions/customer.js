import api from "../../utils/api";
import {
  LOAD_CUSTOMER_REQUEST,
  LOAD_CUSTOMER_FAIL,
  LOAD_CUSTOMERS_FAIL,
  LOAD_CUSTOMER_SUCCESS,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_REQUEST,
} from "../consts";
import { setAlert } from "../actions/alerts";
export const loadClient = () => async dispatch => {
  dispatch({
    type: LOAD_CUSTOMER_REQUEST,
  });
  try {
    const res = await api.get("/person");
    dispatch({
      type: LOAD_CUSTOMER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_CUSTOMER_FAIL,
    });
    console.log(`error: ${error}`);
    dispatch(setAlert(`error: ${error}`, "danger"));
  }
};
