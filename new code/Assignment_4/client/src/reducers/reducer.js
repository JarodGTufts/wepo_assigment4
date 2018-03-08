import { ADD_OFFER, ADD_PIZZA, REMOVE_OFFER, REMOVE_PIZZA } from '../constants/constants';

const initialState = {
    cart: {
        offers: [],
        pizzas: []
    }

};

const reducer = (state = initialState, action) => {
    let id;
    let copystate = {};
    Object.assign(copystate, state);
    if (action.payload !== undefined)
        id = action.payload.id;
    switch (action.type) {
        case ADD_OFFER:
            if (copystate.cart.offers[id] === undefined) {
                copystate.cart.offers[id] = action.payload;
                return copystate;
            } else {
                copystate.cart.offers[id].quantity += action.payload.quantity;
                return copystate;
            }
        case REMOVE_OFFER:
            if (copystate.cart.offers[id] !== undefined) {
                copystate.cart.offers[id].quantity -= action.payload.quantity;
                if (copystate.cart.offers[id].quantity <= 0) {
                    delete copystate.cart.offers[id];
                }
            }
            return copystate;
        case ADD_PIZZA:
            if (copystate.cart.pizzas[id] === undefined) {
                copystate.cart.pizzas[id] = action.payload;
                return copystate;
            } else {
                copystate.cart.pizzas[id].quantity += action.payload.quantity;
                return copystate;
            }
            return copystate;
        case REMOVE_PIZZA:
            if (copystate.cart.pizzas[id] !== undefined) {
                copystate.cart.pizzas[id].quantity -= action.payload.quantity;
                if (copystate.cart.pizzas[id].quantity <= 0) {
                    delete copystate.cart.pizzas[id];
                }
            }
            return copystate;
        default: return copystate;
    }
};

export default reducer;