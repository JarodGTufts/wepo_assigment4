import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';




class OfferItem extends React.Component {
    render() {
        var info = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{info.offer}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {info.price} ISK</h6>
                    <h6 className="card-text">Valid For: {info.validFor}</h6>
                    {/* TODO: Implement the cart and link this button to something*/}
                    <button href="#" className="btn btn-primary mr-1 mb-1">Select pizzas</button>
                </div>

            </div>

        )
    }
}


OfferItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number, 
        offer: PropTypes.string, 
        price: PropTypes.number,
        validFor: PropTypes.string
    }).isRequired
}

export default OfferItem