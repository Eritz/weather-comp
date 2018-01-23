import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import linkReducer from './store/reducers/link';
import listReducer from './store/reducers/list';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mainReducer = combineReducers({
    linkRedu: linkReducer,
    listRedu: listReducer, 
});

const store = createStore(mainReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
