import React from 'react';

import CartList from './cart-list/cart-list.js';


class Cart extends React.Component {

    // TODO: Make this component read the current cart state from the Redux
    //       store, which should be initialized from localStorage. For now, 
    //       I'll be spoofing in items just to get the presentational part
    //       looking sharp

    render() {

        var temp_spoofin = [
            { "id": 1, "name": "Senior Salsa", "description": "Pizza with pepperoni, salsa and chili", "price": 1350, "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
            { "id": 2, "name": "Chilanoz", "description": "Pizza with pepperoni, jalapeno, cream cheese, mushrooms and black pepper", "price": 1450, "image": "https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff" }

        ]

        return (
            <CartList items={temp_spoofin} />
        )
    }
}



export default Cart;