import React from 'react';
import PropTypes from 'prop-types';


class PizzaPage extends React.Component {
    
    render () {

        var info = this.props.data[0];

        return(
            <div className="text-center my-3">

                <img className="img-thumbnail" src={info.image} alt={info.name}></img>
                <h3 className="my-3">The {info.name}</h3>
                <h4 className="my-3">{info.description}</h4>
                <h5>For the low, low price of {info.price}</h5>
            </div>
        );
    }

}

PizzaPage.propTypes = {
    data: PropTypes.array.isRequired
}

export default PizzaPage