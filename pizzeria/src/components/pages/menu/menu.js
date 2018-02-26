import React from 'react';
import $ from 'jquery';

import PizzaList from './pizza-list/pizza-list.js';


// This component renders the menu page, passing data retrieved from
// the server into the PizzaList component

// The big, possible TODO here is outlined in pizza-list.js, but I'll
// repeat it again - it could make more sense to store the information
// represented in the state of this component in the global store, so
// that the offers page can take advantage. In that case, the GET
// request that is written here would have to be moved, so that the
// data for pizzas is available even if the user goes directly to the
// "Offers" page
class Menu extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            pizzas: []
        };
    }

    componentDidMount () {

        // Retrieve the pizza listings and and store the result in the local state
        $.get('http://localhost:3500/api/pizzas', (data) => {
            this.setState({ pizzas: data });
        });
    }


    render () {

        // Only calls if the state has been updated by a succesful GET call
        if (this.state.pizzas.length > 0) {

            return (<div className="row"><PizzaList pizzas={this.state.pizzas} /></div>);

        }
        else {
            return (<div>Loading...</div>);
        }
        
    }
}



export default Menu;