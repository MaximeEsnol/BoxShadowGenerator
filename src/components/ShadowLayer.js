import React from 'react';
import PropTypes from 'prop-types';

const ShadowLayer = props => {

    return (
        <div className="shadow-layer">
            <p>
                {props.order}
            </p>
        </div>
    )
}

ShadowLayer.propTypes = {
    /** The order number of this item in the full list. */
    order: PropTypes.number.isRequired,
    /** The singular shadow object for this item. */
    shadow: PropTypes.object.isRequired
};

export default ShadowLayer;