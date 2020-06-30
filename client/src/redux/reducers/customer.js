import {
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_FAIL,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_REQUEST,
  UPDATE_CUSTOMER_REQUEST,
  UPDATED_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAIL,
} from "../consts";
const initialState = {
  customer: null,
  customers: [],
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CUSTOMERS_REQUEST:
    case GET_CUSTOMER_REQUEST:
    case UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: payload,
      };

    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: payload,
      };

    case GET_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        customers: [],
      };

    case GET_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        customer: null,
      };
    case UPDATED_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: payload,
      };
    case UPDATE_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        customer: null,
      };
    default:
      return state;
  }
}
