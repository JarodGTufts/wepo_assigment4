import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addOffer } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        orders: ownProps.orders,
        addOffer: offer => dispatch(addOffer(offer))
    };
};

class ConnectedOfferDetail extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            detail: {
                offer: '',
                validFor: '',
                price: ''
            }
        };
    }
    componentWillMount() {
        this.context.pizzaServer.getOffer(this.props.detail,
            (item) => {
                this.setState({detail: item});

            },
            (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className={'OfferDetail'}>
                <h3>{this.state.detail.offer}</h3>
                <h4>Valid For: {this.state.detail.validFor}</h4>
                <h4>Price: {this.state.detail.price}</h4>
                <div className={'btn btn-primary'} onClick={ () => { this.onAddToCart(this.props.detail.id, this.context.store); } }>Add to Cart</div>
            </div>
        );
    }

    onAddToCart(id) {
        this.props.addOffer({ id: id, quantity: 1 });
    }
}

ConnectedOfferDetail.propTypes = {
    // The detail is the id of the offer we want to display
    detail : PropTypes.number.isRequired,
    // The addOffer is added by the store connection
    addOffer: PropTypes.func.isRequired
};

ConnectedOfferDetail.contextTypes = {
    // we need access to the pizza server for communication
    pizzaServer : PropTypes.object.isRequired
};

const OfferDetail = connect(null, mapDispatchToProps)(ConnectedOfferDetail);
OfferDetail.plain = ConnectedOfferDetail;

export default OfferDetail;
