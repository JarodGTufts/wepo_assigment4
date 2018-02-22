import React from 'react';
import { PropTypes } from 'prop-types';



class PizzaItem extends React.Component {
    render() {
        var info = this.props.data;
        return (
            <div>
                <div>{info.name}</div>
                <div>{info.description}</div>
                <div>{info.price}</div>
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