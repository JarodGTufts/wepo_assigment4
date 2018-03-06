import React from 'react';
import Navbar from './navbar.js';

import { shallow } from 'enzyme';


describe('Navbar test', () => {

    const component = shallow(<Navbar />);

    it('should render the correct links', () => {
        expect(component.find('Link')).toHaveLength(4);
    });

});
