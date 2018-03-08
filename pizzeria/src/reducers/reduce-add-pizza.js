import { ADD_PIZZA } from '../actions/add-pizza-action.js';


// This reducer watches for the ADD_PIZZA action, and updates the cart
export function updateCart(state = [], action) {
    switch (action.type) {
        case ADD_PIZZA:
            return [
                ...state,
                    {
                        pizza: action.pizza_type
                    }  
            ]

        default:
            return state;
    }
}
