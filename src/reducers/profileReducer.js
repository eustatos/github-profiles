import * as actions from '../constants/actionTypes';
import { SOMETHING_WENT_WRONG, USER_NOT_FOUND } from '../constants/error';

const initialState = {
    isLoading: false,
    profile: null,
    profileError: null,
    repos: [],
    reposError: null,
    username: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                isLoading: true,
                profileError: null,
                username: action.username
            };

        case actions.GET_PROFILE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                profile: action.profile
            };
        }

        case actions.GET_PROFILE_FAILURE:
            return {
                ...initialState,
                profileError: USER_NOT_FOUND
            };

        case actions.CLEAR_PROFILE_ERROR:
            return {
                ...state,
                profileError: null
            };

        case actions.GET_REPOS:
            return {
                ...state,
                isLoading: true,
                reposError: null
            };

        case actions.GET_REPOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                repos: action.repos
            };
        }

        case actions.GET_REPOS_FAILURE:
            return {
                ...initialState,
                reposError: SOMETHING_WENT_WRONG
            };

        default:
            return state;
    }
}
