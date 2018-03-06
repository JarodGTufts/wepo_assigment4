import React from 'react';
import Menu from './menu.js';

import { shallow } from 'enzyme';


describe('Menu page test', () => {

    const component = shallow(<Menu />);

    it('should render the menu page without a get request', () => {
        expect(component.contains('Loading...')).toBe(true);
    });

});
