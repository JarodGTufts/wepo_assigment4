import React from 'react';
import OrderItem from './order-item.js';

import { shallow } from 'enzyme';


describe('Previous order display tests', () => {

    var test_item = { 
        name: "Ted",
        method: "pickup",
        price: "0",
    };

    const component = shallow(<OrderItem data={test_item} />);

    it('should display the given order with basic information', () => {

        expect(component.contains(test_item["name"])).toBe(true);

        expect(component.contains(test_item["method"])).toBe(true);

        expect(component.contains(test_item["price"])).toBe(true);

    });


});
