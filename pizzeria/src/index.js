// Import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/app.js';
import store from './store.js';

// Import redux dependencies
import { Provider } from 'react-redux';

// Import misc dependencies
import registerServiceWorker from './registerServiceWorker';

/* Big TODO here: Make this actually produce a store
let store = createStore(function () { return null; })
*/

// Render the BrowserRouter nexted inside a Provider to allow store access
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
