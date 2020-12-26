import React, { Component } from 'react';
import Counter from "./counter"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Braden's Homework</h1>
        <Counter />
      </div>
    );
  }
}
