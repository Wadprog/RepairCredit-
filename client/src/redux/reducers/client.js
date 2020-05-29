import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
} from "../consts";
const initialState = {
  employee: [],
  loading: false,
  error: [],
  coworkers: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_COWORKER_REQUEST:

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
