import axios from 'axios';
import * as actions from '../constants/actionTypes';

export const verifyAuth = payload => dispatch => {
    dispatch(({
        type: actions.VERIFY_AUTH,
        username: payload.username
    }));

    axios
        .post('/auth', { ...payload })
        .then(res => {
            dispatch({
                type: actions.VERIFY_AUTH_SUCCESS,
                isAuthenticated: res.data.isAuthenticated
            });
        })
        .catch(error => {
            dispatch({
                type: actions.VERIFY_AUTH_FAILURE,
                error
            });
        });
};

export const clearError = () => ({
    type: actions.CLEAR_ERROR
});
