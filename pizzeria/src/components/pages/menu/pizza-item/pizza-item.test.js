import React from 'react';
import PizzaItem from './pizza-item.js';

import { shallow } from 'enzyme';


describe('Individual pizza display tests', () => {

    const test_item = { "id": 1, 
        "name": "Senior Salsa", 
        "description": "Pizza with pepperoni, salsa and chili", 
        "price": 1350, 
        "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" 
    };
        
    const component = shallow(<PizzaItem data={test_item} />);

    it('should display the pizza with basic information', () => {
        expect(component.contains(test_item["name"])).toBe(true);

        expect(component.contains(test_item["price"])).toBe(true);

    });

    it('should have a link to a detailed page', () => {
        expect(component.find('Link')).toHaveLength(1);
    });


});
