import React from 'react';
import {shallow} from 'enzyme/build/index';
import About from './About';

describe('About', () => {
    it('Executes the About test', () => {
        expect(true).toBe(true);
    });

    it('Checks if the h3 component is present', () => {
        const about = shallow(<About/>);
        expect(about.find('h3').length).toBe(1);
    });
});