
export const ADD_PIZZA = "addPizza";


// This action is dispatched to add a pizza to the cart
export function addPizza(pizza_type) {
    return {
        type: ADD_PIZZA,
        pizza_type
    }
}
