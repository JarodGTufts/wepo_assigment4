// Import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app.js';

// Import redux dependencies
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import misc dependencies
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// TODO: Make this actually produce a store
let store = createStore(function () { return null; })

// Render the BrowserRouter nexted inside a Provider to allow store access
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>, 

    document.getElementById('root'));
registerServiceWorker();
