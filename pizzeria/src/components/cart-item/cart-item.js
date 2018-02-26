import React from 'react';
import { PropTypes } from 'prop-types';




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