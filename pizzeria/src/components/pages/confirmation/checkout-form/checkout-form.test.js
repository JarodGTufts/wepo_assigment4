import React from 'react';
import CheckoutForm from './checkout-form.js';

import { shallow } from 'enzyme';


describe('Checkout form tests', () => {

    const delivery_component = shallow(<CheckoutForm method="delivery" />);

    it('should render extra form options for delivery', () => {
        expect(delivery_component.find('input')).toHaveLength(5);
    });

    const pickup_component = shallow(<CheckoutForm method="pickup" />);

    it('should render only pickup inputs for pickup orders', () => {
        expect(pickup_component.find('input')).toHaveLength(2);
    });
});
