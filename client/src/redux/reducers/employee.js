import { ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL } from '../consts';
const initialState = {
    employee: [],
    loading: false,
    error: [],
};
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
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
        default:
            return state;
    }
}