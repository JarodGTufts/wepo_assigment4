
export const REMOVE_PIZZA = "removePizza";


// This action is dispatched to remove the pizza at the given index
// from the cart
export function removePizza(index) {
    return {
        type: REMOVE_PIZZA,
        index
    }
}
