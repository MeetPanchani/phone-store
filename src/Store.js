import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly' ;
import rootReducer from './reducers';

const middleware = [thunk];
const intialState = {};
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(rootReducer, intialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;