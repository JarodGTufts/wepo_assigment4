import { shallow } from 'enzyme';
import React from 'react';
import NavigationBar from './NavigationBar';
import {NavLink} from 'react-router-dom';
import store from '../../store/store';
describe('NavigationBar tests', () => {

    it('Executes the NavigationBar test', () => {
        expect(true).toBe(true);
    });

    it('Contains the links', () => {

        const component = shallow(<NavigationBar.plain  logoImageUrl={''}/>);
        expect(component.find(NavLink).length).toBe(5);
    });

    it('Contains the logo', () => {
        const component = shallow(<NavigationBar.plain  logoImageUrl={''}/>);
        expect(component.find('img').length).toBe(1);
    });


});
