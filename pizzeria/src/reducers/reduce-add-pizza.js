import { ADD_PIZZA } from '../actions/add-pizza-action.js';
import { REMOVE_PIZZA } from '../actions/remove-pizza-action.js';

// This reducer watches for the cart related actions, and updates the cart
export function updateCart(state = [], action) {
    switch (action.type) {
        case ADD_PIZZA:
            return [
                ...state,
                    {
                        pizza: action.pizza_type
                    }  
            ]
        case REMOVE_PIZZA:

            // Clone to keep the reducer pure
            var new_state = state.slice();

            // Remove the clicked element
            new_state.splice(action.index, 1);

            return new_state;

        default:
            return state;
    }
}
