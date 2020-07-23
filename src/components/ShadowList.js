import React from 'react';
import ShadowLayer from './ShadowLayer';

const ShadowList = props => {
    return (
        <div className="shadow-list">
            {
                props.shadows.map( ( shadow, index ) => 
                    <ShadowLayer key={index} isActive={(props.current === index)} order={index} shadow={shadow}/>
                )
            }
        </div>
    )
};

export default ShadowList;