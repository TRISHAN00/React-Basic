import React, { Component } from 'react';
import CalculatorUI from './CalculatorUI';

class Calculator extends Component {
    render() {
        return (
            <div className='container'>
                <CalculatorUI/>
            </div>
        );
    }
}

export default Calculator;