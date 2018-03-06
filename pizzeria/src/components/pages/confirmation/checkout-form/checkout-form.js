import React from 'react';
import $ from 'jquery';
import { PropTypes } from 'prop-types';

import { Redirect } from 'react-router-dom';

import ConfirmPopup from '../confirm-popup/confirm-popup.js';


// This component renders the form that the user will submit to the
// server in order to check out with their pizas. It renders the
// appropriate fields when passed in "delivery" or "pickup" as a prop
class CheckoutForm extends React.Component {

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
        $('#submitConfirm').modal('hide');

        var post_body = {
            name: $('#name').val(),
            telephone: $('#telephone').val(),
            method: this.props.method,

            // TODO: Tie this to the state and get the real price of the order
            price: 0,

            address: $('#address').val() ? $('#address').val() : null,
            city: $('#city').val() ? $('#city').val() : null,
            postal: $('#postal').val() ? $('#postal').val() : null
        };


        // Send a request to the server
        // NOTE: I believe that even mild modifications to this ajax code
        //       will cause an unbelievable amount of work.
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

        var inputs = [];

        // Push on the form options that are needed for both pickup
        // and delivery
        inputs.push(
            <div id="basics" key="standard">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                
                <label htmlFor="telephone">Telephone number</label>
                <input type="number" className="form-control" id="telephone" placeholder="The digits needed to contact you" required />
            </div>            
        );

        // Push on the form options ONLY needed for delivery
        if (this.props.method === 'delivery') {

            inputs.push(
                <div id="deliver_inputs" key="delivery_specifics">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Where should we send this?" required />
                    
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="What city are you in?" required />
                                
                    <label htmlFor="postal">Postal code</label>
                    <input type="number" className="form-control" id="postal" placeholder="ZIP" required />

                </div>
            );
        }

        // Return the proper form options
        return (
            <div>
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    {inputs}
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

CheckoutForm.propTypes = {
    method: PropTypes.string.isRequired
}


export default CheckoutForm;
