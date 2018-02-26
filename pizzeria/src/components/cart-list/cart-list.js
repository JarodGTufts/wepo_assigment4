import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.js'


class CartList extends React.Component {

    render () {
        var to_load = this.props.items;
        var loaded = [];
        var sum = 0;
        var counter = 0;
        for (var entry in to_load) {
            sum += to_load[entry].price;

            loaded.push(
                <CartItem data={to_load[entry]} key={counter}/>
            );

            counter++;

        }

        return (
            <div>
                <h3 className="my-3">Your Cart</h3>
                {loaded}
                <hr />
                <h4>Total: {sum} ISK</h4>
                <Link to="/checkout" className="btn btn-success">Checkout</Link>
            </div>
        );
    }
}

CartList.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object)
}

export default CartList