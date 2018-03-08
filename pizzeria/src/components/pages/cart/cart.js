import { connect } from 'react-redux';

import CartList from './cart-list/cart-list.js';


function mapStateToProps(state) {

    return { items: state.cart }
}

const Cart = connect(mapStateToProps)(CartList)

export default Cart;