import api from "../../utils/api";
import {
  ADD_PERSON_REQUEST,
  ADD_PERSON_FAIL,
  ADD_PERSON_SUCCESS,
} from "../consts";

import { setAlert } from "./alerts";

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
    return true;
  } catch (error) {
    dispatch({
      type: ADD_PERSON_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
    return false;
  }
};
