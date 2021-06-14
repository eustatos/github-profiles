import * as actions from '../constants/actionTypes';
import { USER_NOT_FOUND } from '../constants/error';

const initialState = {
    error: null,
    isLoading: false,
    name: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                isLoading: true,
                name: action.name
            };

        case actions.GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        }

        case actions.GET_PROFILE_FAILURE:
            return {
                ...initialState,
                error: USER_NOT_FOUND
            };

        case actions.CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}
