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

const setSession = () => sessionStorage.setItem('session', 'active');

const getSession = () => sessionStorage.getItem('session');

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
            setSession();

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

        case actions.CLEAR_AUTH_ERROR:
            return {
                ...state,
                error: null
            };

        case actions.GET_SESSION: {
            return {
                ...state,
                isAuthenticated: getSession()
            };
        }

        default:
            return state;
    }
}
