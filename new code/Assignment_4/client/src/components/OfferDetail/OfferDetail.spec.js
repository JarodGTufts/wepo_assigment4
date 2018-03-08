import React from 'react';
import {shallow} from 'enzyme/build/index';
import OfferDetail from './OfferDetail';
import store from '../../store/store';

describe('OfferDetail', () => {

    it('Executes the OfferDetail test', () => {
        expect(true).toBe(true);
    });


    it('Checks if the html elements are present', () => {
        let server = require('../../server');
        server.getOffer = (id, cbSucc, cbFail) => {
            cbSucc({offer: 'dummy', validFor: 'dummy', price: 'dummy'});
        };
        const context = {pizzaServer: server};
        const component = shallow(<OfferDetail.plain addOffer={jest.fn}  detail={1}/>, {context});
        expect(component.find('h3').length).toBe(1);
        expect(component.find('h4').length).toBe(2);
        expect(component.find('.btn').length).toBe(1);
    });

});