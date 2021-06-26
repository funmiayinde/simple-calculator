import React from 'react';


const Error = ({message}: ErrorProp) => {
    return (
        <div className="error-div">
            <div className="error-msg">{message}</div>
        </div>
    )
};

type ErrorProp = {
    message: string;
};

Error.defaultProps = {
    message: ''
};

export default Error;
