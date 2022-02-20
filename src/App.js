import React, { Component } from 'react';
import './App.css';

class Child extends Component {
  render() {
    this.props.func(this);
    return <h1>I am Child Component</h1>
  }
}

class App extends Component {
  getContext(context) {
    console.log(context);
  }
  render() {
    this.getContext(this)
    return (
      <div>
        <h1>Pass Function as Props</h1>
        <Child func={this.getContext} />
      </div>
    );
  }
}

export default App;