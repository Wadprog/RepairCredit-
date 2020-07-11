import {
  LOAD_CREDITITEMS_REQUEST,
  LOAD_CREDITITEMS_FAIL,
  LOAD_CREDITITEMS_SUCCESS,
  LOAD_ALLCREDITITEMS_REQUEST,
  LOAD_ALLCREDITITEMS_FAIL,
  LOAD_ALLCREDITITEMS_SUCCESS,
  LOAD_CREDITITEM_REQUEST,
  LOAD_CREDITITEM_FAIL,
  LOAD_CREDITITEM_SUCCESS,
} from "../consts";

const initialState = {
  loading: false,
  creditItem: null,
  creditItems: null,
  creds: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CREDITITEM_REQUEST:
    case LOAD_ALLCREDITITEMS_REQUEST:
    case LOAD_CREDITITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAD_CREDITITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        creditItems: payload,
      };

    case LOAD_CREDITITEMS_FAIL:
      return {
        ...state,
        loading: false,
        creditItems: null,
      };
    case LOAD_ALLCREDITITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        creds: payload,
      };

    case LOAD_ALLCREDITITEMS_FAIL:
      return {
        ...state,
        loading: false,
        creds: [],
      };

    case LOAD_CREDITITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        creditItem: payload,
      };

    case LOAD_CREDITITEM_FAIL:
      return {
        ...state,
        loading: false,
        creditItem: null,
      };
    default:
      return state;
  }
}
