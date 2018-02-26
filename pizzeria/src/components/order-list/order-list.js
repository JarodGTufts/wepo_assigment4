import React from 'react';
import { PropTypes } from 'prop-types';
import OrderItem from '../order-item/order-item.js'


class OrderList extends React.Component {
    render () {
        var to_load = this.props.orders;
        var loaded = [];

        for (var entry in to_load) {

            loaded.push(
                <div className="col-sm-3" key={to_load[entry].id}>
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