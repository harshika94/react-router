import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <BrowserRouter>
        <Hello />
    </BrowserRouter>
    ); 
  }
}

render(<App />, document.getElementById('root'));
