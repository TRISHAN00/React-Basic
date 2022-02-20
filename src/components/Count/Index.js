import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h2>Count Increase: {this.state.count} </h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click ++
        </button>
      </div>
    );
  }
}

export default Count;
