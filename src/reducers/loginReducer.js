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

const setSession = username => sessionStorage.setItem('session', username);

const getSession = () => sessionStorage.getItem('session');

const deleteSession = () => sessionStorage.removeItem('session');

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
            setSession(state.username);

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
            const username = getSession();
            return {
                ...state,
                isAuthenticated: !!username,
                username
            };
        }

        case actions.DELETE_SESSION: {
            deleteSession();
            return {
                ...initialState
            };
        }

        default:
            return state;
    }
}
