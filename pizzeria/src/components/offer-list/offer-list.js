import React from 'react';
import { PropTypes } from 'prop-types';
import OfferItem from '../offer-item/offer-item.js'


class OfferList extends React.Component {
    render () {
        var to_load = this.props.offers;
        var loaded = [];

        for (var entry in to_load) {

            loaded.push(
                <div className="col-sm-3" key={to_load[entry].id}>
                    <OfferItem data={to_load[entry]} />
                </div>
            );

        }

        return loaded;
    }
}

OfferList.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.object)
}

export default OfferList