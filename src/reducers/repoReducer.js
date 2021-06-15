import * as actions from '../constants/actionTypes';
import { SOMETHING_WENT_WRONG } from '../constants/error';

const initialState = {
    isLoading: false,
    commits: [],
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_COMMITS:
            return {
                ...initialState,
                isLoading: true
            };

        case actions.GET_COMMITS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                commits: action.commits
            };
        }

        case actions.GET_COMMITS_FAILURE:
            return {
                ...initialState,
                error: SOMETHING_WENT_WRONG
            };

        default:
            return state;
    }
}
