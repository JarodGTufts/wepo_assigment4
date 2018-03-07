import { ADD_PIZZA } from '../constants/action-types.js';

const initialState = {
  pizzas: [],
  orders: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return { ...state, pizzas: [...state.PizzaList, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
