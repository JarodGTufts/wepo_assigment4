import React from 'react';
import { PropTypes } from 'prop-types';

import { addPizza } from '../../../../actions/add-pizza-action.js';
import { connect } from 'react-redux';

import $ from 'jquery';

// This popup allows the user to select the pizzas that they would like with
// the offer they have selected. It checks the offer description that it is
// passed as a prop and, if that option contains "Two", renders an extra
// selection box

// the global store with this information
class OfferPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_pizza: "",
            second_pizza: ""
        }

        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
    }

    handleChangeFirst(event) {
        this.setState({first_pizza: event.target.value});
    }

    handleChangeSecond(event) {
        this.setState({second_pizza: event.target.value});
    }

    render () {

        var options = this.props.pizzas;

        var add_offer = () => {

            var order_pizzas = [];

            order_pizzas.push(
                options.filter((obj) => {
                    return obj["name"] == [this.state.first_pizza];
                })
            );

            if (pizzas.length > 1) {
                order_pizzas.push(
                    options.filter((obj) => {
                        return obj["name"] == [this.state.second_pizza];
                    })
                );
            }

            for (var index in order_pizzas) {

                this.props.dispatch(addPizza(order_pizzas[index][0]));
            }
            
        }

        var option_list = [];

        for (var entry in options) {
            option_list.push(<option value={options[entry]["name"]} key={entry}>{options[entry]["name"]}</option>);
        }

        var pizzas = [];

        pizzas.push(
            <div className="form-group" key={pizzas.length}>
                <label htmlFor="firstPizza">Choose your pizza</label>
                <select className="form-control" id="firstPizza" onChange={this.handleChangeFirst}>
                    {option_list}
                </select>
            </div>
        );

        if (this.props.offer.includes("Two")) {
            // Duplicate the form 
            pizzas.push(
                <div className="form-group" key={pizzas.length}>
                    <label htmlFor="secondPizza">Choose a second pizza</label>
                    <select className="form-control" id="secondPizza" onChange={this.handleChangeSecond}>
                        {option_list}
                    </select>
                </div>
            );
        }

        // Connect this component to the correct modal button
        var modal_id = "offer-select" + this.props.id;

        return (
            <div className="modal fade" id={modal_id} tabIndex="-1" role="dialog" aria-labelledby="offerSelectModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="chooseTitle">Choose your pizzas</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {pizzas}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            <button type="button" className="btn btn-primary" onClick={ () => add_offer() } data-dismiss="modal">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


OfferPopup.propTypes = {
    offer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired
}

OfferPopup = connect()(OfferPopup)


export default OfferPopup