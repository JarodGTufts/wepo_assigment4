import React from 'react';
import Offers from './offers.js';

import { shallow } from 'enzyme';


describe('Offer page tests', () => {

    const component = shallow(<Offers />);

    it('should render a loading page', () => {
        expect(component.contains('Loading...')).toBe(true);
    });

});
