import React from 'react';
import { PropTypes } from 'prop-types';
import PizzaItem from '../pizza-item/pizza-item.js'


// This component contains a list of all of the available pizzas,
// using data that it is passed with a prop.

class PizzaList extends React.Component {
    render () {
        var to_load = this.props.pizzas;
        var loaded = [];

        for (var entry in to_load) {

            loaded.push(
                <div className="col-sm-3 pizza-item" key={to_load[entry].id}>
                    <PizzaItem data={to_load[entry]} />
                </div>
            );

        }

        return loaded;
    }
}


PizzaList.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PizzaList;
