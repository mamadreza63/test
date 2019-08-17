import React from 'react';

const Error = (props) => (
    <div>
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Error;