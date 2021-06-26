import React from 'react';
import './App.css';
import Calculator from "./modules/Calculator";

const App = () => {
    return (
        <div className="container">
            <div className="title">
                <span className="caption">Simple calculator</span>
            </div>
            <Calculator/>
        </div>
    );
};

export default App;
