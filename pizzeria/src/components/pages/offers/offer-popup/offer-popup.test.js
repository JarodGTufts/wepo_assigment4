import React from 'react';
import OfferPopup from './offer-popup.js';

import { shallow } from 'enzyme';


describe('Offer popup tests', () => {

    const two_offer_string = "Two for the prize of one (pay for more expensive pizza)";
    const one_offer_string = "One pizza and a coke";

    const pizza_options = [
        { "id": 1, "name": "Senior Salsa", "description": "Pizza with pepperoni, salsa and chili", "price": 1350, "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
        { "id": 2, "name": "Chilanoz", "description": "Pizza with pepperoni, jalapeno, cream cheese, mushrooms and black pepper", "price": 1450, "image": "https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
 
    ]
    const two_offer_component = shallow(<OfferPopup offer={two_offer_string} id={0} pizzas={pizza_options} />).dive();

    it('should render a popup with two select options', () => {
        expect(two_offer_component.find('select')).toHaveLength(2);
    });

    const one_offer_component = shallow(<OfferPopup offer={one_offer_string} id={1} pizzas={pizza_options} />).dive();

    it('should render a popup with one select option', () => {
        expect(one_offer_component.find('select')).toHaveLength(1);
    });


});
