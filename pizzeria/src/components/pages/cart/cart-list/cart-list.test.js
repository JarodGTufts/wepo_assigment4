import React from 'react';
import CartList from './cart-list.js';

import { shallow } from 'enzyme';


describe('List of items in cart tests', () => {

    // Render with two sample items
    const test_items = [
        { "id": 1, 
        "name": "Senior Salsa", 
        "description": "Pizza with pepperoni, salsa and chili", 
        "price": 1350, 
        "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
        { "id": 2, 
        "name": "Chilanoz", 
        "description": "Pizza with pepperoni, jalapeno, cream cheese, mushrooms and black pepper", 
        "price": 1450, 
        "image": "https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff" }

    ];

    const component = shallow(<CartList items={test_items} />);

    it('should render CartItems for the items in the cart', () => {
        expect(component.find('CartItem')).toHaveLength(test_items.length);
    });

    it('should display the correct total price', () => {
        var correct_total = 0;

        for (let i = 0; i < test_items.length; i++) {
            correct_total += test_items[i]["price"];
        }

        expect(component.contains(correct_total)).toEqual(true);

    });

    it('should have a Link to checkout', () => {
        expect(component.find('Link')).toHaveLength(1);
    });
});
