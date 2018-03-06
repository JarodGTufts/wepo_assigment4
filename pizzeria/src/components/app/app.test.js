import React from 'react';
import App from './App.js';

import { shallow } from 'enzyme';


describe('Home app tests', () => {

    const component = shallow(<App />);

    it('should have exactly one navbar', () => {
        expect(component.find('Navbar')).toHaveLength(1);
    });

    it('should have a switch containing routes', () => {
        expect(component.find('Switch')).toHaveLength(1);
    });
});
