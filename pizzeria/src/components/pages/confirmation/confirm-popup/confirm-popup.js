import { connect } from 'react-redux';

import ConfirmElement from '../confirm-element/confirm-element.js';


function mapStateToProps(state) {

    return { pizzas: state.cart }
}

const ConfirmPopup = connect(mapStateToProps)(ConfirmElement)

export default ConfirmPopup;