import React from 'react';
import OfferPopup from './offer-popup.js';

import { shallow } from 'enzyme';


describe('Offer popup tests', () => {

    const two_offer_string = "Two for the prize of one (pay for more expensive pizza)";
    const one_offer_string = "One pizza and a coke";
    const two_offer_component = shallow(<OfferPopup offer={two_offer_string} id={0}/>);

    it('should render a popup with two select options', () => {
        expect(two_offer_component.find('select')).toHaveLength(2);
    });

    const one_offer_component = shallow(<OfferPopup offer={one_offer_string} id={1}/>);

    it('should render a popup with one select option', () => {
        expect(one_offer_component.find('select')).toHaveLength(1);
    });


});
