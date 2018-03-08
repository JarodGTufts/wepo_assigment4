import React from 'react';
import $ from 'jquery';

import OrderList from './order-list/order-list.js';

// This component renders a list containing the data that it retrieves from the
// server, representing all of the previous orders associated with the telephone
// number that is passed as a URL parameter

class Orders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            none: false
        };


    }

    componentDidMount () {

        // Retrieve all of the orders associated with this telephone number
        $.get('http://localhost:3500/api/orders/' + this.props.match.params.telephone, (data) => {
            this.setState({ orders: data });

        // Catch for a bad request, or a telephone number that cannot be found
        }).fail(() => {
            this.setState({ none: true });
        });
    }


    render () {

        // Only calls if the state has been updated by a succesful GET call
        if (this.state.orders.length > 0) {

            return (<div className="row"><OrderList orders={this.state.orders}/></div>);

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