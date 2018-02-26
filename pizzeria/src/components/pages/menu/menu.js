import React from 'react';
import $ from 'jquery';

import PizzaList from './pizza-list/pizza-list.js';

class Menu extends React.Component {

    // TODO: Modify this to create an instance of a data-container
    // that modifies global store with the response of a GET request
    
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