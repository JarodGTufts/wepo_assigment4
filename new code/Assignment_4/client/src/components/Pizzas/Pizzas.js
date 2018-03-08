import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addPizza } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pizzas: ownProps.pizzas,
        addPizza: pizza => dispatch(addPizza(pizza))
    };
};

class ConnectedPizzas extends React.Component {

    render() {
        let pizzas = [];
        for(const key in this.props.pizzas) {
            let pizza = this.props.pizzas[key];
            let link = '/pizzas/' + pizza.id;
            pizzas.push(
                <li className={'list-group-item Pizza'} key={parseInt(pizza.id)}>
                    <Link to={link}> {pizza.name} </Link>
                    <div className={'btn btn-primary addButton'} onClick={ () => { this.onAddToCart(key) } }>Add to Cart</div>
                </li>
            )
        }
        return (
            <div id={'Pizzas'}>
                <h1>Pizzas</h1>
                <ul className="list-group" id = 'PizzaList'>
                    {pizzas}
                </ul>
            </div>
        );
    }

    onAddToCart(id) {
        this.props.addPizza({ id: id, quantity: 1 });
    }
}

ConnectedPizzas.propTypes = {
    // Object holding information about all pizzas, id is the key
    pizzas : PropTypes.object.isRequired,
    // Function for adding pizzas provided by the store connection
    addPizza : PropTypes.func.isRequired
};

const Pizzas = connect(null, mapDispatchToProps)(ConnectedPizzas);
Pizzas.plain = ConnectedPizzas;

export default Pizzas;
