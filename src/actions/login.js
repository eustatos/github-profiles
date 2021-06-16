import axios from 'axios';
import * as actions from '../constants/actionTypes';
import services from '../config';

export const verifyAuth = payload => dispatch => {
    const { method, url } = services.api.auth;

    dispatch(({
        type: actions.VERIFY_AUTH,
        username: payload.username
    }));

    axios({
        method,
        url,
        data: { ...payload }
    })
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

export const clearAuthError = () => ({
    type: actions.CLEAR_AUTH_ERROR
});

export const getSession = () => ({
    type: actions.GET_SESSION
});

export const deleteSession = () => ({
    type: actions.DELETE_SESSION
});
