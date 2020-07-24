import React, { useRef, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import './../css/slider.css';
import PropTypes from 'prop-types';

const Slider = ( {min, max, defaultValue, handler, label} ) => {
    const uniqueId = useRef(uniqid()).current;
    const [currentValue, setCurrentValue] = useState(defaultValue);

    useEffect( () => {
        setCurrentValue( defaultValue );
    }, [defaultValue]);

    const handleChange = event => {
        event.stopPropagation();
        
        updateValue( event.target.value );
    }

    const updateValue = newValue => {
        let numberValue = parseInt( newValue );
        setCurrentValue( numberValue );
        handler( numberValue );
    }

    return (
        <div className="input-field slider">
            <div className="user-information">
                <label htmlFor={uniqueId}>
                    {label}
                </label>

                <input type="number"
                    id={uniqueId}
                    value={currentValue}
                    onChange={event => handleChange(event)} />
            </div>

            <input type="range"
                min={min}
                max={max}
                value={currentValue}
                onChange={event => handleChange(event)} />
        </div>
    )
}

Slider.propTypes = {
    /** The minimum value. Default: -100 */
    min: PropTypes.number,
    /** The maximum value. Default: 100 */
    max: PropTypes.number,
    /** The default value. Default: 0 */
    defaultValue: PropTypes.number,
    /** A function that handles the slider value. */
    handler: PropTypes.func,
    /** A label to shortly describe the slider. Default: "Slider" */
    label: PropTypes.string
}

Slider.defaultProps = {
    min: -100,
    max: 100,
    defaultValue: 0,
    label: "Slider"
}

export default Slider;