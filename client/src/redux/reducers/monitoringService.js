import {
  LOAD_MONITORING_SERVICES_REQUEST,
  LOAD_MONITORING_SERVICES_SUCCESS,
  LOAD_MONITORING_SERVICES_FAIL,
  ADD_MONITORING_SERVICE_REQUEST,
  ADD_MONITORING_SERVICE_SUCCESS,
  ADD_MONITORING_SERVICE_FAIL,
} from "../consts";
const initialState = {
  monitoringServices: [],
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MONITORING_SERVICES_REQUEST:
    case ADD_MONITORING_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MONITORING_SERVICES_SUCCESS:
    case ADD_MONITORING_SERVICE_SUCCESS:
      return {
        ...state,
        loading: true,
        monitoringServices: payload,
      };
    case LOAD_MONITORING_SERVICES_FAIL:
    case ADD_MONITORING_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        monitoringServices: [],
      };
    default:
      return state;
  }
}
