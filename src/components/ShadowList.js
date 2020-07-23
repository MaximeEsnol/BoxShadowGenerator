import React from 'react';
import ShadowLayer from './ShadowLayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './../css/shadow-list.css';

const ShadowList = props => {
    return (
        <div className="shadow-list">
            {
                props.shadows.map( ( shadow, index ) => 
                    <ShadowLayer key={index} isActive={(props.current === index)} order={index} shadow={shadow}/>
                )
            }
            <div className="add-shadow">
                <FontAwesomeIcon className="plus-button" onClick={ () => props.addShadowHandler() } icon={faPlus}/>
            </div>
        </div>
    )
};

export default ShadowList;