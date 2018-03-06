import About from './about.js';
import React from 'react';

import { shallow } from 'enzyme';

describe('About page tests', () => {


    const component = shallow(<About />);

    // Check that the correct div is rendered
    it('should display the about page', () => {
        expect(component.find('#about_info')).toHaveLength(1);
    });

});