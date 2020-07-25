import React from 'react';
import { getBoxShadowFromObject } from './../utils/shadow';
import './../css/code.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Code = props => {

    return (
        <div className="code">
            <FontAwesomeIcon icon={faChevronUp}/>
            <code>
                box-shadow: { getBoxShadowFromObject( props.shadows ) };
            </code>
        </div>
    )
};

export default Code;