import React from 'react';
import css from './../css/box.css';

const Box = props => {

    return(
        <div className="shadow-box-container">
            <div className="shadow-box" style={{boxShadow: props.boxShadow}}>
                
            </div>
        </div>
    )
};

export default Box;