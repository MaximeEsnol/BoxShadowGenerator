import React from 'react';
import './../css/content.css';

const Content = props => {
    
    return (
        <div className="content">
            {props.children}
        </div>
    );
};

export default Content;