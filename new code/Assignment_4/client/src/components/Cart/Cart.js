import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addOffer, addPizza, removeOffer, removePizza } from '../../actions/actions';

const mapStateToProps = (state, ownProps) => {
    return { 
        pizzas: ownProps.pizzas,
        orders: ownProps.orders,
        cart: { offers: state.cart.offers, pizzas: state.cart.pizzas } 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addOffer: offer => dispatch(addOffer(offer)),
        addPizza: pizza => dispatch(addPizza(pizza)),
        removeOffer: offer => dispatch(removeOffer(offer)),
        removePizza: pizza => dispatch(removePizza(pizza)),
        emptyCart: cart => dispatch(emptyCart(cart))
    };
};

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let cartItems = [];

        let total = 0;
        this.props.cart.offers.forEach((offer) => {
            cartItems.push(
                <div className="row" key={'offerid' + offer.id}>
                    <div className="col-6">
                        {this.props.offers[offer.id].offer}
                    </div>
                    <div className="col-3">
                        {offer.quantity}
                        <div className={'btn btn-primary'} onClick={() => { this.onAddOffer(offer.id) }}>+</div>
                        <div className={'btn btn-primary'} onClick={() => { this.onRemoveOffer(offer.id) }}>-</div>
                    </div>
                    <div className="col-3">
                        {offer.quantity * this.props.offers[offer.id].price + ' ISK'}
                    </div>
                </div>

            );
            total += offer.quantity * this.props.offers[offer.id].price;
        });
        this.props.cart.pizzas.forEach((pizza) => {
            cartItems.push(
                <div className="row" key={'pizzaid' + pizza.id}>
                    <div className="col-6">
                        {this.props.pizzas[pizza.id].name}
                    </div>
                    <div className="col-3">
                        {pizza.quantity}
                        <div className={'btn btn-primary'} onClick={() => { this.onAddPizza(pizza.id) }}>+</div>
                        <div className={'btn btn-primary'} onClick={() => { this.onRemovePizza(pizza.id) }}>-</div>
                    </div>
                    <div className="col-3">
                        {pizza.quantity * this.props.pizzas[pizza.id].price + ' ISK'}
                    </div>
                </div>

            );
            total += pizza.quantity * this.props.pizzas[pizza.id].price;
        });

        if (cartItems.length === 0) {
            cartItems.push(
                <div className={'row'}>
                    <div className={'col'}>
                        No items in cart.
                    </div>
                </div>

            )
        }
        return (
            <div id={'Cart'}>
                <h3>Cart</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <b>Name</b>
                        </div>
                        <div className="col-3">
                            <b>Quantity</b>
                        </div>
                        <div className="col-sm">
                            <b>Price</b>
                        </div>
                    </div>
                    {cartItems}
                </div>
                <div id={'checkout'}>
                    <p>Total price: {total}</p>
                    <div className={'btn btn-primary'}> Checkout </div>
                </div>

            </div>
        );
    }

    onAddOffer(id) {
        this.props.addOffer({ id: id, quantity: 1 });
    }

    onRemoveOffer(id) {
        this.props.removeOffer({ id: id, quantity: 1 });
    }
    onAddPizza(id) {
        this.props.addPizza({ id: id, quantity: 1 });
    }
    onRemovePizza(id) {
        this.props.removePizza({ id: id, quantity: 1 });
    }
};

// Explicit props passed down by main
Cart.propTypes = {
    // Object holding information for all pizzas, id is the key
    pizzas: PropTypes.object.isRequired,

    // Object holding information for all offers, id is the key
    offers: PropTypes.object.isRequired
};

// Props passed down by connecting to the store
Cart.propTypes = {
    // Function for adding a offer to the cart
    addOffer: PropTypes.func.isRequired,
    // Function for removing a offer to the cart
    removeOffer: PropTypes.func.isRequired,
    // Function for adding a pizza to the cart
    addPizza: PropTypes.func.isRequired,
    // Function for removing a pizza to the cart
    removeOffer: PropTypes.func.isRequired,
    // Function for emptying the cart
    emptyCart: PropTypes.func.isRequired,
};

const CartForm = connect(mapStateToProps, mapDispatchToProps)(Cart);
CartForm.plain = Cart;
export default CartForm;
