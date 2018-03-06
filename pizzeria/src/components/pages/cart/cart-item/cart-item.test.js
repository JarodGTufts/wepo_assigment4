import React from 'react';
import CartItem from './cart-item.js';

import { shallow } from 'enzyme';


describe('Indvidual cart item tests', () => {

    const test_item = { 
        "id": 1, 
        "name": "Senior Salsa", 
        "description": 
        "Pizza with pepperoni, salsa and chili", 
        "price": 1350, 
        "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff"
    };

    const component = shallow(<CartItem data={test_item} />);

    it('should show the name of the pizza', () => {
        expect(component.contains(test_item["name"])).toBe(true);
    });

    it('should show the price of the pizza', () => {
        expect(component.contains(test_item["price"])).toBe(true);
    });

    it('should have a button to add the pizza to the cart', () => {
        expect(component.find('button')).toHaveLength(1);
    });
});
