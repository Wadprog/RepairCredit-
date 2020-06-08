import {
  LOAD_CUSTOMER_REQUEST,
  LOAD_CUSTOMER_FAIL,
  LOAD_CUSTOMERS_FAIL,
  LOAD_CUSTOMER_SUCCESS,
  LOAD_CUSTOMERS_SUCCESS,
  LOAD_CUSTOMERS_REQUEST,
} from "../consts";
const initialState = {
  customer: null,
  customers: [],
  loading: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CUSTOMERS_REQUEST:
    case LOAD_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: payload,
      };

    case LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: payload,
      };

    case LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        customers: [],
      };

    case LOAD_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        customer: null,
      };
    default:
      return state;
  }
}
