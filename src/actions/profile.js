import axios from 'axios';
import * as actions from '../constants/actionTypes';
import services from '../config';

export const getRepos = url => dispatch => {
    dispatch(({
        type: actions.GET_REPOS,
        url
    }));

    axios.get(url)
        .then(({ data }) => {
            dispatch({
                type: actions.GET_REPOS_SUCCESS,
                repos: data
            });
        })
        .catch(error => {
            dispatch({
                type: actions.GET_REPOS_FAILURE,
                error
            });
        });
};

export const getProfile = username => dispatch => {
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
                profile: res.data
            });
            return res.data.repos_url;
        })
        .then(url => {
            getRepos(url)(dispatch);
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
