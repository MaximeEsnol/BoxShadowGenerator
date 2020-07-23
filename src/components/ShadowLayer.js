import React from 'react';
import PropTypes from 'prop-types';
import { getBoxShadowFromObject } from '../utils/shadow';
import './../css/shadow-layer.css';

const ShadowLayer = props => {

    return (
        <div className={"shadow-layer " + (props.isActive && "active") } onClick={props.onClickLayer.bind(this, props.order)}>
            <div className="shadow-preview">
                <div className="shadow-preview-box" 
                style={{boxShadow: getBoxShadowFromObject( [props.shadow] )}}>

                </div>
            </div>
            <p>
                Shadow #{props.order + 1}
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