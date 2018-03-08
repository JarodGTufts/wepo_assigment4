import React from 'react';
import {shallow} from 'enzyme/build/index';
import PizzaDetail from './PizzaDetail';
import store from '../../store/store';

describe('PizzaDetail', () => {


    it('Executes the PizzaDetail test', () => {
        expect(true).toBe(true);
    });


    it('Checks if the html elements are present', () => {
        let server = require('../../server');
        server.getPizza = (id, cbSucc, cbFail) => {
            cbSucc({image: 'dummy', name: 'dummy', description: 'dummy', price: 'dummy'});
        };
        context.pizzaServer = server;
        const component = shallow(<PizzaDetail.plain addPizza={jest.fn}  detail={1}/>);
        expect(component.find('h3').length).toBe(1);
        expect(component.find('h4').length).toBe(2);
        expect(component.find('.btn').length).toBe(1);
        expect(component.find('img').length).toBe(1);
    });

});