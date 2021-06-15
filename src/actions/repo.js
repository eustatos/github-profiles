import axios from 'axios';
import * as actions from '../constants/actionTypes';
import services from '../config';

// eslint-disable-next-line import/prefer-default-export
export const getCommits = (repoId, username) => dispatch => {
    const { method, url } = services.github.commits;

    dispatch(({
        type: actions.GET_COMMITS,
        repoId,
        username
    }));

    axios({
        method,
        url: url.replace('{username}', username).replace('{repoId}', repoId)
    })
        .then(res => {
            dispatch({
                type: actions.GET_COMMITS_SUCCESS,
                commits: res.data
            });
        })
        .catch(error => {
            dispatch({
                type: actions.GET_COMMITS_FAILURE,
                error
            });
        });
};
