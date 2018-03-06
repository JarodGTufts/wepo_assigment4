import React from 'react';
import Confirmation from './confirmation.js';

import { shallow } from 'enzyme';


describe('Confirmation page tests', () => {

    const component = shallow(<Confirmation />);

    it('should render the confirmation page', () => {
        expect(component.contains('Thanks for your business!')).toBe(true);
    });

});
