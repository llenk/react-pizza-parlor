import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if(action.type === 'PIZZA'){
        console.log('pizzaReducer, add', action);
        return [...state, action.info]
    }else if (action.type === 'REMOVE_PIZZA'){
        console.log('pizzaReducer, subtract', action);
        let  pizzaToDelete = action.payload;
        const matchPizza = pizza => pizza.id !== pizzaToDelete.id;
        return state.filter(matchPizza);
    }else if (action.type === 'REMOVE_ALL_PIZZA'){
        console.log('pizzaReducer, subtract all', action);
        return [];
    }
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
