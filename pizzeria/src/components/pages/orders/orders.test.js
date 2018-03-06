import React from 'react';
import Orders from './orders.js';

import { shallow } from 'enzyme';


describe('Menu page test', () => {

    const component = shallow(<Orders match={ { params: { id: 1234567890 } } } />);

    it('should render the order page with a loading symbol', () => {
        expect(component.contains('Loading...')).toBe(true);
    });

});
