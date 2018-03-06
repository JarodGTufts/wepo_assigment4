import React from 'react';
import ConfirmPopup from './confirm-popup.js';

import { shallow } from 'enzyme';


describe('Confirmation popup tests', () => {

    const component = shallow(<ConfirmPopup />);

    it('should render the confirmation modal', () => {
        expect(component.find('#submitConfirm')).toHaveLength(1);
    });


});
