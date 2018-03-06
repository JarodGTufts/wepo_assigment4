import React from 'react';
import { PropTypes } from 'prop-types';
import PizzaItem from '../pizza-item/pizza-item.js'


// This component contains a list of all of the available pizzas,
// using data that it is passed with a prop.

// A possible TODO here is to make it so that rather than loading based
// on a prop, this component should use a list of pizzas from the global
// store. Because the types of pizzas here is also used on the "Offers" page,
// it would make sense to have the information about what pizzas are offered
// available to all components through the use of the store
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

export default PizzaList