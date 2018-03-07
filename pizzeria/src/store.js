import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/initialState.js'


const store = createStore(rootReducer);

export default store;
