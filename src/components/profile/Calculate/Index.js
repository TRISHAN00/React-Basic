import React, { Component } from 'react';
import Calculations from './Calculations';

class Calculate extends Component {
    getCalculateSum(a, b) {
        return console.log(a + b);
    }
    render() {
        this.getCalculateSum(this)
        return (
            <div>
                <h2>Calculate</h2>
                <Calculations func={this.getCalculateSum} />
            </div>
        );
    }
}

export default Calculate;