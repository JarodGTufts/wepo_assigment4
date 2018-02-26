import React from 'react';
import { PropTypes } from 'prop-types';
import PizzaItem from '../pizza-item/pizza-item.js'


class PizzaList extends React.Component {
    render () {
        var to_load = this.props.pizzas;
        var loaded = [];

        for (var entry in to_load) {

            loaded.push(
                <div className="col-sm-3" key={to_load[entry].id}>
                    <PizzaItem data={to_load[entry]} />
                </div>
            );

        }

        return loaded;
    }
}

PizzaList.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object)
}

export default PizzaList