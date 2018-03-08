import React from 'react';
import {shallow} from 'enzyme/build/index';
import Offers from './Offers';
import {Link} from 'react-router-dom';
import store from '../../store/store';

jest.mock('../../server');

describe('Offers', () => {


    it('Executes the Offers test', () => {
        expect(true).toBe(true);
    });



    it('Checks if the html elements are present', () => {
        const component = shallow(<Offers.plain addOffer={jest.fn}  offers={{}}/>);
        expect(component.find('h1').length).toBe(1);
        expect(component.find('ul').length).toBe(1);
        expect(component.find('li').length).toBe(0);

    });

    it('Checks if list items are rendered', () => {
        const component = shallow(<Offers.plain addOffer={jest.fn}  offers={{'mock': {offer: 'mock', id:'mock', price:'mock'}}}/>);
        expect(component.find('li').length).toBe(1);
        expect(component.find(Link).length).toBe(1);
        expect(component.find('.btn').length).toBe(1);
    });
});