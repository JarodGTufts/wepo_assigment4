import React from 'react';
import OfferItem from './offer-item.js';

import { shallow } from 'enzyme';


describe('Individual offer display tests', () => {

    const test_item = { 
        "id": 1, 
        "offer": "Two for the prize of one (pay for more expensive pizza)", 
        "price": 0, 
        "validFor": "pickup"
    };

        
    const component = shallow(<OfferItem data={test_item} />);

    it('should display the offer with basic information', () => {

        expect(component.contains(test_item["offer"])).toBe(true);

        expect(component.contains(test_item["validFor"])).toBe(true);


    });


});
