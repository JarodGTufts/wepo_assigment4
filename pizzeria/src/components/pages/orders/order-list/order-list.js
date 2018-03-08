import React from 'react';
import { PropTypes } from 'prop-types';
import OrderItem from '../order-item/order-item.js'


// This component renders a list of all of the orders that it is given as props
class OrderList extends React.Component {
    render () {
        var to_load = this.props.orders;
        var loaded = [];

        for (var entry in to_load) {

            loaded.push(
                <div className="container-fluid" key={entry}>
                    <OrderItem data={to_load[entry]} />
                </div>
            );

        }

        return loaded;
    }
}

OrderList.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.object)
}

export default OrderList