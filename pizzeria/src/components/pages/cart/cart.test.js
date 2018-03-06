import Cart from './cart.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('Cart page tests', () => {


    const component = shallow(<Cart />);

    // Check that the correct div is rendered
    it('should render a CartList', () => {
        expect(component.find('CartList')).toHaveLength(1);
    });

});