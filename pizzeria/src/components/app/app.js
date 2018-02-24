import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/navbar.js';
import Menu from '../pages/menu/menu.js';
import Offers from '../pages/offers/offers.js';
import About from '../pages/about/about.js';
import Cart from '../pages/cart/cart.js';
import CheckoutForm from '../../components/checkout-form/checkout-form.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// A simple routing app for rendering the correct page
const App = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Switch>
                <Route exact path="/" render={() => <Menu />} />
                <Route exact path="/offers" render={() => <Offers />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/cart" render={() => <Cart />} />
                <Route exact path="/testing" render = {() => <CheckoutForm />} />
            </Switch>
        </div>
    )
}


export default App;