import * as actions from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const someAction = someProp => ({
    type: actions.SOME_ACTION,
    someProp
});
