import React, { Component } from 'react'

export default class App extends Component {
  render() {

  const obj = {
    title : 'Heading Title',
    id: 'myID'
  }

    return (
      <div className="App">
        <h2 {...obj}>Hello React</h2>
        <p>Would you be react with Me!!</p>
      </div>
    )
  }
}
