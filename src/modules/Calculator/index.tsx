import React, {useState} from 'react';
import Display from "../../_shared/components/Display";
import {expr} from "../../_shared/utils";
import Error from "../../_shared/components/Error";
import Buttons from "../../_shared/components/Buttons";


const Calculator = (props: any) => {

    const [calcExp, setCalExp] = useState({
        displayExp: '',
        displayValue: 0,
        showError: false,
    });

    const calculateValue = () => {
        setCalExp({
            ...calcExp,
            displayValue: expr(calcExp.displayExp),
            displayExp: ''
        });
    };

    const computeDisplayExp = (e: any) => {
        if (e.target.id === 'CL') {
            setCalExp({...calcExp, displayExp: '', displayValue: 0});
        } else if (calcExp.displayExp === '' && e.target.id.match(/[0-9]/g) === null) {
            setCalExp({...calcExp, displayExp: '', showError: true});
            setTimeout(() => {
                setCalExp({...calcExp, showError: false});
            }, 3000);
        } else {
            setCalExp({
                ...calcExp,
                displayExp: calcExp.displayExp + e.target.id,
            });
        }
    };

    const {displayExp, displayValue, showError} = calcExp;
    return (
        <div>
            {showError && <Error message={'Please enter a number'}/>}
            <Display value={displayValue} expression={displayExp}/>
            <Buttons computeValue={calculateValue} computeExpression={computeDisplayExp}/>
        </div>
    )
};

export default Calculator;
