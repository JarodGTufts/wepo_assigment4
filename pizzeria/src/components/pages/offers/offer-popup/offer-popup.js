import React from 'react';
import { PropTypes } from 'prop-types';


class OfferPopup extends React.Component {


    render () {
        var pizzas = [];
        pizzas.push(
                <div className="form-group" key={pizzas.length}>
                    <label htmlFor="firstPizza">Example select</label>
                    <select className="form-control" id="firstPizza">
                        {/* TODO: Pull a list of pizza options from the store */}
                        <option>HOOKUP TO STORE 1</option>
                        <option>HOOKUP TO STORE 2</option>

                    </select>
                </div>
        );

        if (this.props.offer.includes("Two")) {
            // Duplicate the form 
            pizzas.push(
                <div className="form-group" key={pizzas.length}>
                    <label htmlFor="secondPizza">Example select</label>
                    <select className="form-control" id="secondPizza">
                        {/* TODO: Pull a list of pizza options from the store */}
                        <option>HOOKUP TO STORE 1</option>
                        <option>HOOKUP TO STORE 2</option>

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
                            {/* TODO: Make this add the offer to the cart, somehow */}
                            {/* Probably by dispatching an action to the store and updating global state */}
                            <button type="button" className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


OfferPopup.propTypes = {
    offer: PropTypes.string,
    id: PropTypes.number
}

export default OfferPopup