import React from 'react';
import $ from 'jquery';

import OfferList from '../../offer-list/offer-list.js';

class Offers extends React.Component {

    // TODO: Modify this to create an instance of a data-container
    // that modifies global store with the response of a GET request
    
    constructor(props) {
        super(props);

        this.state = {
            offers: []
        };
    }

    componentDidMount () {

        // Retrieve the pizza listings and and store the result in the local state
        $.get('http://localhost:3500/api/offers', (data) => {
            this.setState({ offers: data });
        });
    }


    render () {

        // Only calls if the state has been updated by a succesful GET call
        if (this.state.offers.length > 0) {

            return (<div className="row"><OfferList offers={this.state.offers} /></div>);

        }
        else {
            return (<div>Loading...</div>);
        }
        
    }
}



export default Offers;