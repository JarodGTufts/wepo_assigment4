import React from 'react';
import { PropTypes } from 'prop-types';



class PizzaItem extends React.Component {
    render() {
        var info = this.props.data;
        return (
            <div className="card">
                <img className="card-img-top" src={info.image} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {info.price} ISK</h6>
                    <p className="card-text">{info.description}</p>
                    
                    {/* TODO: Implement the cart and link this button to something*/}
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>

            </div>

        )
    }
}


PizzaItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string, 
        description: PropTypes.string, 
        price: PropTypes.number,
        image: PropTypes.string
    }).isRequired
}

export default PizzaItem