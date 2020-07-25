import React from 'react';
import { getBoxShadowFromObject } from './../utils/shadow';
import './../css/code.css';

const Code = props => {

    return (
        <div className="code">
            <code>
                box-shadow: { getBoxShadowFromObject( props.shadows ) };
            </code>
        </div>
    )
};

export default Code;