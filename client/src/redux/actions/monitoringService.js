import api from "../../utils/api";
import { setAlert } from "./alert";
import {
  LOAD_MONITORING_SERVICES_REQUEST,
  LOAD_MONITORING_SERVICES_SUCCESS,
  LOAD_MONITORING_SERVICES_FAIL,
  ADD_MONITORING_SERVICE_REQUEST,
  ADD_MONITORING_SERVICE_SUCCESS,
  ADD_MONITORING_SERVICE_FAIL,
} from "../consts";

export const getAllMonitoringService = () => async dispatch => {
  dispatch({
    type: LOAD_MONITORING_SERVICES_REQUEST,
  });
  try {
    const res = await api.get("/monitoringService");
    dispatch({
      type: LOAD_MONITORING_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_MONITORING_SERVICES_FAIL,
    });
  }
};

export const addMonitoringService = formData => async dispatch => {
  dispatch({
    type: ADD_MONITORING_SERVICE_REQUEST,
  });
  const body = JSON.stringify(formData);
  try {
    const res = await api.post("/monitoringService", body);

    dispatch({
      type: ADD_MONITORING_SERVICE_SUCCESS,
      payload: res.data,
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADD_MONITORING_SERVICE_FAIL,
    });
    dispatch(setAlert(`Error ${error.response.data.msg}`, "danger"));
    return false;
  }
};
