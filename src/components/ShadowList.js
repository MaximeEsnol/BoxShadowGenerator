import React from 'react';
import ShadowLayer from './ShadowLayer';

const ShadowList = props => {

    return (
        <div className="shadow-list">
            {
                props.shadows.forEach( ( shadow, index ) => 
                    <ShadowLayer order={index} shadow={shadow}/>
                )
            }
        </div>
    )
};

export default ShadowList;