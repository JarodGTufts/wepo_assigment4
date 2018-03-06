import React from 'react';
import { PropTypes } from 'prop-types';


// This component renders an individual order record that it has been passed
// as a prop.

// A potential TODO on this section is to modify the informatin that is
// presented based on the type of order, displaying for example the delivery
// address for delivered orders. 
class OrderItem extends React.Component {
    render() {

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
    data: PropTypes.object
}

export default OrderItem