import React from 'react';
import {shallow} from 'enzyme/build/index';
import CartForm from './Cart';
import store from '../../store/store';

describe('Cart', () => {

    it('Executes the Cart test', () => {
        expect(true).toBe(true);
    });

    it('Checks if the dummy text is diplayed when the cart is empty', () => {
        const component = shallow(<CartForm.plain
            pizzas={{}}
            offers={{}}
            addOffer={jest.fn()}
            removeOffer={jest.fn()}
            addPizza={jest.fn()}
            removePizza={jest.fn()}
            emptyCart={jest.fn()}
            cart={{offers : [],
                pizzas : []}}
        />);
        expect(component.find('h3').length).toBe(1);
        expect(component.find('.row').length).toBe(2);
        expect(component.contains('No items in cart.')).toBe(true);
    });

    it('Checks if the cart items are diplayed', () => {
        const component = shallow(<CartForm.plain
            pizzas={{1: {id:1, name:'mock', price:'mock'}}}
            offers={{1: {id:1, offer:'mock', price:'mock'}}}
            addOffer={jest.fn()}
            removeOffer={jest.fn()}
            addPizza={jest.fn()}
            removePizza={jest.fn()}
            emptyCart={jest.fn()}
            cart={{offers : [{id:1,quantity:1}],
                pizzas : [{id:1,quantity:1}]}}
        />);
        expect(component.find('h3').length).toBe(1);
        expect(component.find('.row').length).toBe(3);
        expect(component.contains('No items in cart.')).toBe(false);
        expect(component.find('.btn').length).toBe(5); //2x +, 2x -, 1x checkout
    });
});