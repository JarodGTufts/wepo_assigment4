import React from 'react';
import $ from 'jquery';

import PizzaList from '../../pizza-list/pizza-list.js';



class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pizzas: []
        };
    }

    componentDidMount () {

        // Bind the object 'this' for later use
        //var curr = this;

        $.get('http://localhost:3500/api/pizzas', (data) => {
            this.setState({ pizzas: data });
        });
    }

    render () {
        if (this.state.pizzas.length > 0) {
            console.log(this.state.pizzas);
            return <PizzaList pizzas={this.state.pizzas} />;
        }
        else {
            return <div>Loading...</div>
        }
        
    }
}



export default Menu;