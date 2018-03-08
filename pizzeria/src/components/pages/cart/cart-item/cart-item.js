import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { removePizza } from '../../../../actions/remove-pizza-action.js';

// This component is rendered as the individual items in a users
// shopping cart.

class CartItem extends React.Component {
    render() {
        var info = this.props.data;

        return (
            <div className="row mt-2">
                <div className="col">
                    <div className="row">
                    <h4 className="col-md-auto">{info.name}</h4>

                    <button type="button" className="btn btn-danger col-sm-auto" 
                            onClick={ () => this.props.dispatch(removePizza(this.props.index)) } >Remove</button>
                    </div>
                </div>
                <h5 className="text-right col">{info.price}</h5>
            </div>
        )
    }
}


CartItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string, 
        description: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string
    }).isRequired,
    index: PropTypes.number.isRequired
}

CartItem = connect()(CartItem);

export default CartItem