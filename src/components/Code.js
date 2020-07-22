import React from 'react';

const Code = props => {
    return(
        <div className="code">
            <code>
                box-shadow: {props.shadows};
            </code>
        </div>
    )
};

export default Code;