import { LOAD_PHONETAG_REQUEST, LOAD_PHONETAG_SUCCESS, LOAD_PHONETAG_FAIL } from '../consts';
const initialState = {
    phonetag: [],
    loading: false,
    error: [],
};
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_PHONETAG_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOAD_PHONETAG_SUCCESS:
            return {
                ...state,
                phonetag: payload,
                loading: false,
            };
        case LOAD_PHONETAG_FAIL:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}