import React from 'react';
import PizzaPage from './pizza-page.js';

import { shallow } from 'enzyme';


describe('Pizza detail page test', () => {

    const test_item = [{ "id": 1, 
        "name": "Senior Salsa", 
        "description": "Pizza with pepperoni, salsa and chili", 
        "price": 1350, 
        "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" 
    }];

    const component = shallow(<PizzaPage data={test_item} />);
    
    it('should display details about the given pizza', () => {
        expect(component.contains(test_item[0]["description"])).toBe(true);
    });

});
