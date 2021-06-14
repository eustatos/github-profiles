import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-extraneous-dependencies

import rootReducer from '../reducers';

export const history = createBrowserHistory();
const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
    thunk,
    routerMiddleware(history),
    logger
))(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer(history), initialState);
}

// const store = createStore(
//     rootReducer(history),
//     {},
//     composeEnhancers(
//         applyMiddleware(
//             thunk,
//             routerMiddleware(history),
//             logger
//         )
//     )
// );

// export default store;
