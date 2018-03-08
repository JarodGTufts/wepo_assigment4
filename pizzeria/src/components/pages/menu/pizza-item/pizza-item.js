import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { addPizza } from '../../../../actions/add-pizza-action.js';

// This class represents a single pizza, and displays the information from
// the given object data in a readable format

class PizzaItem extends React.Component {



    render () {

        var info = this.props.data;

        return (
            <div className="card">
                <img className="card-img-top" src={info.image} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {info.price} ISK</h6>

                    <button className="btn btn-primary mr-1 mb-1" onClick={ () => this.props.dispatch(addPizza(info)) }>
                        Add to cart
                    </button>
                    <Link to={"/pizzas/" + info.id} className="btn btn-primary mb-1">More Info</Link>
                </div>

            </div>

        )
    }
  }

};



ConntectedPizzaItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    }).isRequired
};

PizzaItem = connect()(PizzaItem)

export default PizzaItem;
