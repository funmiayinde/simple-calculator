import React from 'react';

const Buttons = ({computeValue, computeExpression}: ButtonProps) => {
    const CAL_BUTTONS = [
        '(', ')', '^', 'CL',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '.', '0', '=', '+',
    ];
    return (
        <div className="show-buttons">
            {CAL_BUTTONS.map((elem, index) => (
                <a
                    key={index}
                    href="#" id={elem}
                    className="btn"
                    onClick={(elem !== '=') ? computeExpression : computeValue}
                >
                    {elem}
                </a>
            ))}
        </div>
    )
};

type ButtonProps = {
    computeValue: any | Function,
    computeExpression: any | Function;
};


export default Buttons;


