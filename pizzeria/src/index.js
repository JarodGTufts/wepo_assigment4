// Import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app.js';

// Import redux dependencies
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import the master reducer app to use with the store
import { pizzaApp } from './reducers/master-reducer.js';

// Import misc dependencies
import registerServiceWorker from './registerServiceWorker';


let new_store = createStore(pizzaApp)

// Render the BrowserRouter nexted inside a Provider to allow store access
ReactDOM.render(
    <Provider store={new_store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

