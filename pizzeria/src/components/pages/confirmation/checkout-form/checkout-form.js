import { connect } from 'react-redux';

import CheckoutPresentation from './checkout-presentation.js';


function mapStateToProps(state) {

    return { pizzas: state.cart }
}

const CheckoutForm = connect(mapStateToProps)(CheckoutPresentation)

export default CheckoutForm;