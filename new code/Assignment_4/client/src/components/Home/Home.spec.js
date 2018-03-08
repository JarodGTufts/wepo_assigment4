import React from 'react';
import {shallow} from 'enzyme/build/index';
import Home from './Home';

describe('Home', () => {
    it('Executes the Home test', () => {
        expect(true).toBe(true);
    });

    it('Checks if the display elements are present', () => {
        const component = shallow(<Home/>);
        expect(component.find('.display-1').length).toBe(1);
        expect(component.find('.display-4').length).toBe(1);
    });
});