import * as actions from '../constants/actionTypes';
import {
    SOMETHING_WENT_WRONG,
    INCORRECTED_USERNAME_OR_PASSWORD
} from '../constants/error';

const initialState = {
    error: null,
    isSent: false,
    isAuthenticated: false,
    username: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.VERIFY_AUTH:
            return {
                ...state,
                isSent: true,
                username: action.username
            };

        case actions.VERIFY_AUTH_SUCCESS: {
            const { isAuthenticated } = action;
            let error = null;

            if (!isAuthenticated) {
                error = INCORRECTED_USERNAME_OR_PASSWORD;
            }

            return {
                ...state,
                isSent: false,
                isAuthenticated,
                error
            };
        }

        case actions.VERIFY_AUTH_FAILURE:
            return {
                ...initialState,
                error: SOMETHING_WENT_WRONG
            };

        case actions.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
}
