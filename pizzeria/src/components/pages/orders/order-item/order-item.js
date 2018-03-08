import React from 'react';
import { PropTypes } from 'prop-types';

import PizzaList from '../../menu/pizza-list/pizza-list.js';

// This component renders an individual order record that it has been passed
// as a prop.

class OrderItem extends React.Component {
    render() {

        var info = this.props.data;

        return (
            <div className="card">
                <div className="card-body">
                    <h4>Ordered for:</h4> <h5 className="ml-5">{info.name}</h5>
                    <h4>Order method:</h4> <h5 className="ml-5">{info.method}</h5>
                    <h4>Pizzas in order:</h4>
                    <div className="row">
                        <PizzaList pizzas={info["pizzas"]} />
                    </div>
                </div>
            </div>

        )
    }
}


OrderItem.propTypes = {
    data: PropTypes.object
}

export default OrderItem