import React, { Component } from 'react';

class CountFunction extends Component {
    state = {
        count : 0,
    }
    render() {
        return (
            <div>
                <h2>Another Count: {this.state.count}</h2>
                <button onClick={this.setState((prev) => {
                    return {
                        count : prev.count + 1
                    }
                })} >Increase</button>
            </div>
        );
    }
}

export default CountFunction;