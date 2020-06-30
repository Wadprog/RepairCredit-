import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  LOAD_COWORKERS_REQUEST,
  LOAD_COWORKERS_FAIL,
  LOAD_COWORKERS_SUCCESS,
} from "../consts";
const initialState = {
  coworkers: [],
  coworker: null,
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_COWORKERS_REQUEST:
    case LOAD_COWORKER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAD_COWORKER_SUCCESS:
      return {
        ...state,
        loading: false,
        coworker: payload,
      };
    case LOAD_COWORKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        coworkers: payload,
      };

    case LOAD_COWORKER_FAIL:
      return {
        ...state,
        coworker: null,
        loading: false,
      };

    case LOAD_COWORKERS_FAIL:
      return {
        ...state,
        loading: false,
        coworkers: [],
      };
    default:
      return state;
  }
}
