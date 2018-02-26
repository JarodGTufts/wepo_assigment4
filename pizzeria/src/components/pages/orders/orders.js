import React from 'react';
import $ from 'jquery';

import OrderList from './order-list/order-list.js';

class Orders extends React.Component {

    // TODO: Modify this to create an instance of a data-container
    // that modifies global store with the response of a GET request
    
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            none: false
        };


    }

    componentDidMount () {

        // Retrieve the pizza listings and and store the result in the local state
        $.get('http://localhost:3500/api/orders/' + this.props.match.params.telephone, (data) => {
            this.setState({ orders: data });
            console.log(data);

        }).fail(() => {
            this.setState({ none: true });
        });
    }


    render () {

        // Only calls if the state has been updated by a succesful GET call
        if (this.state.orders.length > 0) {

            return (<div className="row"><OrderList orders={this.state.orders} /></div>);

        }
        // Catch for 404 error with unregistered number
        else if (this.state.none) {

            return(<h3 className="my-3">No orders found for this number</h3>)
        }
        else {
            return (<div>Loading...</div>);
        }
        
    }
}



export default Orders;