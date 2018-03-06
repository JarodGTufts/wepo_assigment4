import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import all of the core pages, which contain the code to render
// all of the member components that we need
import Navbar from '../pages/navbar/navbar.js';
import Menu from '../pages/menu/menu.js';
import Offers from '../pages/offers/offers.js';
import About from '../pages/about/about.js';
import Cart from '../pages/cart/cart.js';
import CheckoutForm from '../pages/confirmation//checkout-form/checkout-form.js';
import Confirmation from '../pages/confirmation/confirmation.js';
import Orders from '../pages/orders/orders.js';

// A simple routing app for rendering the correct page
const App = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Switch>
                {/* This redundancy is necessary to serve some kind of home page
                    when the user goes straight to the root path */}
                <Route exact path="/" render={(props) => <Menu {...props} />} />
                <Route exact path="/pizzas" render={(props) => <Menu {...props} />} />

                <Route exact path="/pizzas/:id" render={(props) => <Menu {...props} />} />

                {/* If any more pages are added, they should go here. This collection
                    of routes basically replaces an index.js from a standard web server,
                    and allows for our page to be rendered correctly using react-router */}
                <Route exact path="/offers" render={() => <Offers />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/cart" render={() => <Cart />} />
                <Route exact path="/checkout" render = {() => <CheckoutForm />} />
                <Route exact path="/confirmation" render = {() => <Confirmation />} />
                <Route exact path="/orders/:telephone" render= {(props) => <Orders {...props} />} />
            </Switch>
        </div>
    )
}


export default App;