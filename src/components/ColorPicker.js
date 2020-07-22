import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import uniqid from 'uniqid';
import { debounce } from 'lodash';
import './../css/color-picker.css';

const ColorPicker = ({ label, handler, defaultColor }) => {
    const formatted = useRef("rgba(0,0,0,1)");
    const [opened, setOpened] = useState(false);
    const [color, setColor] = useState( {rgb: defaultColor });

    const handleColor = color => {
        setColor(color.rgb);

        let formattedColor = "rgba(";
        formattedColor += color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b + ", " + color.rgb.a + ")";

        formatted.current = formattedColor;

        handler(formatted);
    };

    const togglePicker = () => {
        setOpened(!opened);
    };


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
                    <ChromePicker color={color}
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
    defaultColor: PropTypes.object
};

ColorPicker.defaultProps = {
    label: "Color",
    defaultColor: { r: 0, g: 0, b: 0, a: 1 }
};

export default ColorPicker;