import React, { Component } from "react";

class App extends Component {
  render() {

    return React.createElement('div', {className: 'App'}, [
      React.createElement('h2', null, 'Hello World'),
      React.createElement('p', null, 'I am Para')
    ])
  
  }
}

export default App;
