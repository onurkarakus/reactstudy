import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class App extends Component {
  constructor() {
    super();   
  }

  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}

render(<App />, document.getElementById('root'));
