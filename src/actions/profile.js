import axios from 'axios';
import * as actions from '../constants/actionTypes';
import services from '../config';

export const getProfile = ({ username }) => dispatch => {
    const { method, url } = services.github.profile;

    dispatch(({
        type: actions.GET_PROFILE,
        username
    }));

    axios({
        method,
        url: url.replace('{username}', username)
    })
        .then(res => {
            dispatch({
                type: actions.GET_PROFILE_SUCCESS,
                data: res.data
            });
        })
        .catch(error => {
            dispatch({
                type: actions.GET_PROFILE_FAILURE,
                error
            });
        });
};

export const clearProfileError = () => ({
    type: actions.CLEAR_PROFILE_ERROR
});
