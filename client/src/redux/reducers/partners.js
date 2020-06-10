import {
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
} from "../consts";
const initialState = {
  employees: [],
  loading: false,
  error: [],
  coworkers: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_COWORKER_REQUEST:
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: payload,
        loading: false,
      };
    case ADD_EMPLOYEE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOAD_COWORKER_SUCCESS:
      return {
        ...state,
        loading: false,
        coworkers: payload,
      };

    case LOAD_COWORKER_FAIL:
      return {
        ...state,
        loading: false,
        coworkers: [],
      };
    default:
      return state;
  }
}
