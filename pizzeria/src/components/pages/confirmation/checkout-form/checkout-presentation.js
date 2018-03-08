import React from 'react';
import $ from 'jquery';

import { PropTypes } from 'prop-types';

import { Redirect } from 'react-router-dom';

import ConfirmPopup from '../confirm-popup/confirm-popup.js';


// This component renders the form that the user will submit to the
// server in order to check out with their pizzas. It renders the
// appropriate fields when passed in "delivery" or "pickup" as a prop
class CheckoutPresentation extends React.Component {

    // How to redirect after form submission using react-router from:
    //      https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764
    constructor () {
            super();

            this.state = {
                fireRedirect: false
            }
      }

    submitForm = (e) => {
        
        e.preventDefault();

        // Cleanse the modal
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();

        var pizza_info = [];

        for (var entry in this.props.pizzas) {
            pizza_info.push(this.props.pizzas[entry]["pizza"]);
        }

        var post_body = {
            name: $('#name').val(),
            telephone: $('#telephone').val(),
            method: $('input[name=method_radio]:checked').val(),
            pizzas: pizza_info,
            address: $('#address').val() ? $('#address').val() : null,
            city: $('#city').val() ? $('#city').val() : null,
            postal: $('#postal').val() ? $('#postal').val() : null
        };


        // Send a request to the server

        $.ajax({
            url : 'http://localhost:3500/api/orders/' + $('#telephone').val(),
            type: "POST",
            data: JSON.stringify(post_body),
            contentType: "application/json; charset=utf-8",
            dataType   : "json",
        });

        this.setState({fireRedirect: true});

    }

    render () {

        // Return the proper form options
        return (
            <div>
            <form onSubmit={this.submitForm} id="order_form">
                <div className="form-group">
                    <div id="basics" key="standard">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                        
                        <label htmlFor="telephone">Telephone number</label>
                        <input type="number" className="form-control" id="telephone" placeholder="The digits needed to contact you" required />
                        
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="method_radio" id="pickup_select" value="pickup" required/>
                            <label className="form-check-label" htmlFor="pickup_select">Pickup</label>
                        </div>
                        <div className="form-check form-check-inline mt-2">
                            <input className="form-check-input" type="radio" name="method_radio" id="deliver_select" value="deliver" required/>
                            <label className="form-check-label" htmlFor="deliver_select">Delivery</label>
                        </div>

                    </div>            
                    <div id="deliver_inputs" key="delivery_specifics" className="mt-3">
                        <label htmlFor="address">Address (Not needed for pickup)</label>
                        <input type="text" className="form-control" id="address" placeholder="Where should we send this?" />
                        
                        <label htmlFor="city">City (Not needed for pickup)</label>
                        <input type="text" className="form-control" id="city" placeholder="What city are you in?" />
                                    
                        <label htmlFor="postal">Postal code (Not needed for pickup)</label>
                        <input type="number" className="form-control" id="postal" placeholder="ZIP" />

                    </div>
                </div>
                <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#submitConfirm">Submit order</button>
                <ConfirmPopup />
            </form>

            {this.state.fireRedirect && (
                <Redirect to={'/confirmation'}/>
            )}
            </div>
        )
        
    }
}

CheckoutPresentation.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default CheckoutPresentation;
