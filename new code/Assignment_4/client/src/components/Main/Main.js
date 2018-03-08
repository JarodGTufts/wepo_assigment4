import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CartForm from '../Cart/Cart';
import About from '../About/About';
import Offers from '../Offers/Offers';
import Pizzas from '../Pizzas/Pizzas';
import PizzaDetail from '../PizzaDetail/PizzaDetail';
import OfferDetail from '../OfferDetail/OfferDetail';
import Home from '../Home/Home';
import NavigationBar from '../NavigationBar/NavigationBar';
import PropTypes from 'prop-types';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pizzas : [],
            offers : []
        }
    }

    componentWillMount() {
        this.props.pizzaServer.getOffers(
            (offers) => {
                let offersObj = offers.reduce(function(acc, cur) {
                    acc[cur.id] = cur;
                    return acc;
                }, {});
                this.setState(Object.assign({}, this.state, {offers: offersObj}));
            },
            (status) => { console.log('Cannot get offers: ', status); }
        );

        this.props.pizzaServer.getPizzas(
            (pizzas) => {
                let pizzasObj = pizzas.reduce(function(acc, cur) {
                    acc[cur.id] = cur;
                    return acc;
                }, {});
                this.setState(Object.assign({}, this.state, {pizzas: pizzasObj}));
            },
            (status) => { console.log('Cannot get pizzas: ', status); }
        );
    }

    render() {
        return (
            <div id={'Main'}>
                <div>
                    <NavigationBar logoImageUrl='https://www.belmontpizzeria.com/images/belmont-pizza-logo-900.png'/>
                    <div className='container'>
                        <Switch>
                            <Route path='/pizzas/:id' render = {({match}) => { return <PizzaDetail detail={match.params.id}/>; }}/>
                            <Route path='/offers/:id' render = {({match}) => { return <OfferDetail detail={match.params.id}/>; }}/>
                            <Route path='/cart' render= { () => { return <CartForm offers = {this.state.offers} pizzas={this.state.pizzas} />; }} />
                            <Route path='/about' component={About} />
                            <Route exact path='/offers' render = { () => { return <Offers offers={this.state.offers}/>; }} />
                            <Route exact path='/pizzas' render = { () => { return <Pizzas pizzas={this.state.pizzas}/>; }} />
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }

    getChildContext() {
        return {
            pizzaServer : this.props.pizzaServer
        };
    }
}

Main.childContextTypes = {
    // The pizzaserver that encapsulates the communication with the server
    pizzaServer : PropTypes.object
};

Main.propTypes = {
    // The pizzaserver object needs to be passed down by the app
    pizzaServer : PropTypes.object.isRequired
};



export default Main;
