import {
  LOAD_COWORKER_REQUEST,
  LOAD_COWORKER_FAIL,
  LOAD_COWORKER_SUCCESS,
  ADD_PERSON_REQUEST,
  ADD_PERSON_FAIL,
  ADD_PERSON_SUCCESS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_FAIL,
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
    /*case GET_CUSTOMER_REQUEST:
    case GET_CUSTOMERS_REQUEST:
    case ADD_PERSON_REQUEST:
    case LOAD_COWORKER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: payload,
      };

    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: payload,
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

    case GET_CUSTOMERS_FAIL:
      return {
        ...state,
        customers: [],
      };
    case GET_CUSTOMER_FAIL:
      return {
        ...state,
        customer: null,
      };
    case ADD_PERSON_FAIL:
      return {
        ...state,
        loading: false,
        people: [],
      };*/
    default:
      return state;
  }
}
