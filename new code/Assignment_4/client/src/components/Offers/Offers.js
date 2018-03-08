import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addOffer } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        offers: ownProps.offers,
        addOffer: offer => dispatch(addOffer(offer))
    };
};

class ConnectedOffers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let offers = [];
        for(const key in this.props.offers) {
            let offer = this.props.offers[key];
            let link = '/offers/' + offer.id;
            offers.push(
                <li className={'list-group-item Offer'} key={parseInt(offer.id)}>
                    <Link to={link}> {offer.offer} </Link>
                    <div className={'btn btn-primary addButton'} onClick={ () => { this.onAddToCart(offer.id); }}>Add to Cart</div>
                </li>
            )
        }
        return (
            <div id={'Offers'}>
                <h1>Offers</h1>
                <ul className="list-group" id = 'OfferList'>
                    {offers}
                </ul>
            </div>
        );
    }

    onAddToCart(id) {
        this.props.addOffer({ id: id, quantity: 1 });
    }
}

ConnectedOffers.propTypes = {
    // Object holding information for all offers, id is the key
    offers : PropTypes.object.isRequired,
    // Function provided by the store connection
    addOffer: PropTypes.func.isRequired
};

const Offers = connect(null, mapDispatchToProps)(ConnectedOffers);
Offers.plain = ConnectedOffers;

export default Offers;
