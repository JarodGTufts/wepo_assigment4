import React from 'react';
import { PropTypes } from 'prop-types';


// This component is rendered as the individual items in a users
// shopping cart.

// The big TODO here is to make it so that the "Remove" button dispatches
// an action which is further interpreted by a pure function reducer to
// modify the global store and remove the current pizza or offer from the
// cart.
class CartItem extends React.Component {
    render() {
        var info = this.props.data;
        return (
            <div className="row mt-2">
                <div className="col">
                    <div className="row">
                    <h4 className="col-md-auto">{info.name}</h4>
                    {/* TODO: Connect this button to actually remove the pizza from the order
                              in the global state */}
                    <button type="button" className="btn btn-danger col-sm-auto">Remove</button>
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
    }).isRequired
}

export default CartItem