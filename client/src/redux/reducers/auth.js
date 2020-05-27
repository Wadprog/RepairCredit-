import {
	LOG_OUT,
	LOG_IN_FAIL,
	LOG_IN_SUCCESS,
	LOG_IN_REQUEST,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL
} from '../consts';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: false,
	user: null
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOG_IN_REQUEST:
		case LOAD_USER_REQUEST:
			return {
				...state,
				loading: true
			};

		case LOAD_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};

		case LOG_IN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};

		case LOG_IN_FAIL:
		case LOAD_USER_FAIL:
		case LOG_OUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null
			};
		default:
			return state;
	}
}
