import { updateCart } from './reduce-add-pizza.js';

import { combineReducers } from 'redux';

// This master reducer file combines all of the reducers that have
// been written and exports them for index.js


// As more reducers are written, add them here
export const pizzaApp = combineReducers({
    updateCart
});