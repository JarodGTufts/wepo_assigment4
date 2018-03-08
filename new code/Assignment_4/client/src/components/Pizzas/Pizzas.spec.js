import React from 'react';
import {shallow} from 'enzyme/build/index';
import Pizzas from './Pizzas';
import {Link} from 'react-router-dom';
import store from '../../store/store';

jest.mock('../../server');

describe('Pizzas', () => {
    it('Executes the Pizzas test', () => {
        expect(true).toBe(true);
    });



    it('Checks if the html elements are present', () => {
        const component = shallow(<Pizzas.plain addPizza={jest.fn}  pizzas={{}}/>);
        expect(component.find('h1').length).toBe(1);
        expect(component.find('ul').length).toBe(1);
        expect(component.find('li').length).toBe(0);

    });

    it('Checks if list items are rendered', () => {
        const component = shallow(<Pizzas.plain addPizza={jest.fn}  pizzas={{'mock': {offer: 'mock', id:'mock', price:'mock'}}}/>);
        expect(component.find('li').length).toBe(1);
        expect(component.find(Link).length).toBe(1);
        expect(component.find('.btn').length).toBe(1);
    });
});