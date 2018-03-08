import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


// This class represents a single pizza, and displays the information from
// the given object data in a readable format

// The big TODO here is to make the "Add to cart" button dispatch an action
// that is further interpreted by a reducer to add a pizza to the global store
// and update the cart state with the new item



class PizzaItem extends React.Component {
    render() {

        var info = this.props.data;

        return (
            <div className="card">
                <img className="card-img-top" src={info.image} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {info.price} ISK</h6>

                    {/* TODO: Implement the cart and link this button to something*/}
                    <button className="btn btn-primary mr-1 mb-1">Add to cart</button>
                    <Link to={"/pizzas/" + info.id} className="btn btn-primary mb-1">More Info</Link>
                </div>

            </div>

        )
    }

};


PizzaItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    }).isRequired
};


export default PizzaItem;
