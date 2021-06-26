import React from 'react';
import {GenericProps} from "../../types";

const Display = ({expression, value}: GenericProps) => {
    return (
        <div className="display-div">
            <div className="display-expression">{expression}</div>
            <div className="display-value">{value}</div>
        </div>
    );
};

export default Display;
