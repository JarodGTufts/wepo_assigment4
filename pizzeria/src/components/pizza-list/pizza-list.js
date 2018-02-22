import React from 'react';
import { PropTypes } from 'prop-types';
import PizzaItem from '../pizza-item/pizza-item.js'

class PizzaList extends React.Component {
    render () {
        var to_load = this.props.pizzas;
        var loaded = [];

        for (var entry in to_load) {
            loaded.push(<PizzaItem data={to_load[entry]} key={to_load[entry].id} />)
        }

        return loaded;
    }
}

PizzaList.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object)
}

export default PizzaList