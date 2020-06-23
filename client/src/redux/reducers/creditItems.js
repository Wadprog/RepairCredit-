import {
    LOAD_CREDITITEMS_REQUEST,
    LOAD_CREDITITEMS_FAIL,
    LOAD_CREDITITEMS_SUCCESS,
  } from "../consts";
  
  const initialState = {
    loading: false,
    creditItems:null
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
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
      default:
        return state;
    }}