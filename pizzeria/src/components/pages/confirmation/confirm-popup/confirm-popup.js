import React from 'react';


// This class is a modal popup that appears and allows the user to
// confirm their purchase after they have entered their information.

// The major TODO here is to connect this popup to the global store,
// and have it display the items that are currently in the cart.
// To do so, another component may have to be written (probably should be
// honestly) that accepts an offer or pizzas object and returns a properly
// rendered element to display them.
// I think this would probably go right around where the other TODO is
class ConfirmPopup extends React.Component {


    render () {
        
        return (
            <div className="modal fade" id="submitConfirm" tabIndex="-1" role="dialog" aria-labelledby="confirmOrderModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="reviewTitle">Review your order</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* TODO: Take the order from the store, and display it here */}
                            <h4>The Terminator</h4>
                            <h4>Bugged Out</h4>
                            <hr />
                            <h5>Total: 12 million ISK</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            {/* TODO: This should submit the form and send the order */}
                            <button type="submit" className="btn btn-primary">Finalize order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ConfirmPopup