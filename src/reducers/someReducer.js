import * as actions from '../constants/actionTypes';

const initialState = {
    someProp: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actions.SOME_ACTION:
            return {
                someProp: action.someProp
            };
                
        default:
            return state;
    }
}