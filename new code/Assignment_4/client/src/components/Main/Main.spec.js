import React from 'react';
import {shallow} from 'enzyme/build/index';
import Main from './Main';
import NavigationBar from '../NavigationBar/NavigationBar';


jest.mock('../../server');

describe('Main', () => {
    it('Executes the Main test', () => {
        expect(true).toBe(true);
    });

    it('Checks if the navigationBar is present', () => {
        let server = require('../../server');
        server.getOffers = jest.fn();
        server.getPizzas = jest.fn();
        const about = shallow(<Main pizzaServer={server}/>);
        expect(about.find(NavigationBar).length).toBe(1);
    });

    it('Checks if the pizzas and offers are being retrieved', () => {
        let server = require('../../server');
        let offersCalled = false;
        let pizzasCalled = false;
        server.getOffers = () => {
            offersCalled = true;
        };
        server.getPizzas = () => {
            pizzasCalled = true;
        };
        const about = shallow(<Main pizzaServer={server}/>);
        expect(offersCalled).toBe(true);
        expect(pizzasCalled).toBe(true);
    });
});