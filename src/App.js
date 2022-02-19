import React, { Component } from 'react';
import Index from './components/profile/index';

export default class App extends Component {
  render() {

  const obj = {
    title : 'Heading Title',
    id: 'myID'
  }

  const style = {
    fontSize: '60px',
    color: 'orange',
    lineHeight: '1'
  }

  const {fontSize, color, lineHeight} = style;
    return (
      <div style={{textAlign: 'center'}} className="App">
        <h2 style={{fontSize, color, lineHeight}} {...obj}>Hello React</h2>
        <p style={{fontSize: '30px'}}>Would you be react with Me!!</p>
        <p>{new Date().toLocaleDateString()}</p>
        <Index/>
      </div>
    )
  }
}
