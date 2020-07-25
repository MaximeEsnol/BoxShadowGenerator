import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import './../css/color-picker.css';
import { stringToRgbObject } from '../utils/shadow';

const ColorPicker = ({ label, handler, defaultColor }) => {
    const formatted = useRef(defaultColor);
    const [opened, setOpened] = useState(false);
    const [color, setColor] = useState( {rgb: stringToRgbObject(defaultColor) });

    useEffect( () => {
        formatted.current = defaultColor;
        setColor({rgb: stringToRgbObject(defaultColor)});
    }, [defaultColor] );



    const handleColor = color => {
        formatted.current = formatColor(color.rgb);
        handler(formatted.current );
        setColor(color);       
    };

    const togglePicker = () => {
        setOpened(!opened);
    };

    const formatColor = localColor => {
        let formattedColor = "rgba(";
        formattedColor += localColor.r + ", " + localColor.g + ", " + localColor.b + ", " + localColor.a + ")";
        return formattedColor;
    }

    return (
        <div className="input-field color-picker">
            <label onClick={togglePicker}>
                {label}
            </label>
            <div className="color-preview" style={{ backgroundColor: formatted.current }}
                onClick={togglePicker}>

            </div>

            {opened &&
                <div className="picker-popover">
                    <div className="picker-cover" onClick={togglePicker} />
                    <ChromePicker color={color.rgb}
                        onChange={handleColor.bind(this)} />
                </div>
            }
        </div>
    );
}

ColorPicker.propTypes = {
    /** A label to show for the color picker. Default: "Color" */
    label: PropTypes.string,
    /** A handler function to lift up the color state of the color picker. Required. */
    handler: PropTypes.func.isRequired,
    /** The default color to set the color picker to. */
    defaultColor: PropTypes.string
};

ColorPicker.defaultProps = {
    label: "Color",
    defaultColor: { r: 0, g: 0, b: 0, a: 1 }
};

export default ColorPicker;