import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default history => combineReducers({
    router: connectRouter(history),
    loginReducer,
    profileReducer
});
