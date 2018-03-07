
import { createStore } from 'redux';

// Removed unused imports that were causing warnings
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
*/

import rootReducer from './reducers/initialState.js'


const store = createStore(rootReducer);

export default store;
