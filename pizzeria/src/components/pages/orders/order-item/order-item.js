import React from 'react';
import { PropTypes } from 'prop-types';


class OrderItem extends React.Component {
    render() {
        console.log(this.props.data);
        var info = this.props.data;

        return (
            <div className="card">
                <div className="card-body">
                    <h5>Ordered for</h5>: {info.name}
                    <h5>Order method:</h5> {info.method}
                    <h5>Cost:</h5> {info.price}
                </div>
            </div>

        )
    }
}


OrderItem.propTypes = {
    data: PropTypes.string
}

export default OrderItem