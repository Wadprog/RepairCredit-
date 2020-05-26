import { FETCH_PHONETAG_REQUEST, FETCH_PHONETAG_SUCCESS, FETCH_PHONETAG_FAIL } from '../consts';
const initialState = {
    phonetag: [],
    loading: false,
    error: [],
};
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PHONETAG_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PHONETAG_SUCCESS:
            return {
                ...state,
                phonetag: payload,
                loading: false,
            };
        case FETCH_PHONETAG_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}