import React from 'react';

import css from './../css/content.css';

const Content = props => {
    
    return (
        <div className="content">
            {props.children}
        </div>
    );
};

export default Content;