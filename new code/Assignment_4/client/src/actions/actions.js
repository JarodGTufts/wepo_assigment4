import {ADD_OFFER, ADD_PIZZA, REMOVE_OFFER, REMOVE_PIZZA, EMPTY_CART} from '../constants/constants';

export const addOffer = offer => ({ type: ADD_OFFER, payload: offer });
export const addPizza = pizza => ({ type: ADD_PIZZA, payload: pizza });
export const removeOffer = offer => ({ type: REMOVE_OFFER, payload: offer });
export const removePizza = pizza => ({ type: REMOVE_PIZZA, payload: pizza });
export const emptyCart = cart => ({ type: EMPTY_CART, payload: cart});