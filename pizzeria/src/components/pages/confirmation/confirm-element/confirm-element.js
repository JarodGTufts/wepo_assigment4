import React from 'react';

import { PropTypes } from 'prop-types';

// This class is a modal popup that appears and allows the user to
// confirm their purchase after they have entered their information.

class ConfirmElement extends React.Component {

    render () {
        
        var pizza_elems = [];
        var info = this.props.pizzas;
        var sum = 0;

        for (var entry in info) {
            pizza_elems.push(<h4 key={entry}>{info[entry]["pizza"]["name"]}</h4>)
            sum += info[entry]["pizza"]["price"];
        }

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
                            { pizza_elems }
                            <hr />
                            <h5>Total: {sum}</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            <button type="submit" className="btn btn-primary">Finalize order</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ConfirmElement.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ConfirmElement