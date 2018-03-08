import React from 'react';
import $ from 'jquery';

import OfferList from './offer-list/offer-list.js';


// This page renders the list of offers that it retrieves from the server
class Offers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            offers: [],
            pizzas: []
        };
    }

    componentDidMount () {

        // Retrieve the pizza listings and and store the result in the local state
        $.get('http://localhost:3500/api/offers', (data) => {
            this.setState({ offers: data });
        });

        // Retrieve the pizza listings and and store the result in the local state
        $.get('http://localhost:3500/api/pizzas', (data) => {
                this.setState({ pizzas: data });
        });
    }


    render () {

        // Only calls if the state has been updated by a succesful GET call
        if (this.state.offers.length > 0) {

            return (<div className="row"><OfferList offers={this.state.offers} pizzas={this.state.pizzas} /></div>);

        }
        else {
            return (<div>Loading...</div>);
        }
        
    }
}



export default Offers;