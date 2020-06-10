import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  ADD_PERSON_REQUEST,
  ADD_PERSON_FAIL,
  ADD_PERSON_SUCCESS,
} from "../consts";
const initialState = {
  coworker: null,
  coworkers: [],
  customer: null,
  customers: [],
  people: [],
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PERSON_REQUEST:
    case LOAD_COWORKER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        people: [...state.people, payload],
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

    case ADD_PERSON_FAIL:
      return {
        ...state,
        loading: false,
        people: [],
      };
    default:
      return state;
  }
}
