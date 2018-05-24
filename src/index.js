import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    return state;
}

const customerReducer = (state = {}, action) =>  {
    if(action.type === 'ADD_CUSTOMER') {
        console.log('ADD_CUSTOMER: Successful', action);
        return action.payload
    } else if(action.type === 'CLEAR_CUSTOMER') {
        console.log('CLEAR_CUSTOMER: Successful', action)
        return {};
    } 
    return state;
}

const storeInstance = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
        pizzaReducer,
        customerReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
