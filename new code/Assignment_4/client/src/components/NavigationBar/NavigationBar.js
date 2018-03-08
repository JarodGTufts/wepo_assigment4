import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    let itemsInCart = 0;
    state.cart.pizzas.forEach(element => {
        console.log(element);
        itemsInCart += element.quantity;
    });
    state.cart.offers.forEach(element => {
        itemsInCart += element.quantity;
    });
    return {
        itemsInCart: itemsInCart
    };
};

class ConnectedNavigationBar extends React.Component {
    render() {
        return (
            <div id='NavigationBar'>
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <span className="navbar-brand">
                        <img src={this.props.logoImageUrl} alt={''} />
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-link">PizzariaUno
                        </NavLink>
                    </span>
                    <ul className="navbar-nav nav-pills ">
                        <li className="nav-item">
                            <NavLink
                                to="/pizzas"
                                activeClassName="active"
                                className="nav-link">Pizzas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/offers"
                                activeClassName="active"
                                className="nav-link">Offers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/cart"
                                activeClassName="active"
                                className="nav-link">Cart ({this.props.itemsInCart})
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                activeClassName="active"
                                className="nav-link">About
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

ConnectedNavigationBar.propTypes = {
    // The image url is passed down by the main component
    logoImageUrl: PropTypes.string.isRequired
};

const NavigationBar = connect(mapStateToProps)(ConnectedNavigationBar);
NavigationBar.plain = ConnectedNavigationBar;
export default NavigationBar;
