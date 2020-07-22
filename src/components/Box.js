import React from 'react';
import { getBoxShadowFromObject } from './../utils/shadow';
import './../css/box.css';

const Box = props => {



    return(
        <div className="shadow-box-container" style={{backgroundColor: props.backgroundColor}}>
            <div className="shadow-box" 
            style={
                {
                    boxShadow: getBoxShadowFromObject( props.boxShadows ), 
                    backgroundColor: props.boxColor,
                    transform: 'scale(' + props.boxSize/100 + ')'
                }
            }>
                
            </div>
        </div>
    )
};

export default Box;