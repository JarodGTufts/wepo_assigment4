import { ADD_PIZZA } from '../actions/add-pizza-action.js';
import { REMOVE_PIZZA } from '../actions/remove-pizza-action.js';

const initial = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// This reducer watches for the cart related actions, and updates the cart
export function updateCart(state = initial, action) {

    var new_state = [];

    switch (action.type) {
        case ADD_PIZZA:

            new_state = [
                ...state,
                    {
                        pizza: action.pizza_type
                    }  
            ]

            localStorage.setItem("cart", JSON.stringify(new_state));

            return new_state;

        case REMOVE_PIZZA:

            // Clone to keep the reducer pure
            new_state = state.slice();

            // Remove the clicked element
            new_state.splice(action.index, 1);

            localStorage.setItem("cart", JSON.stringify(new_state));

            return new_state;

        default:

            return state;
    }
}
