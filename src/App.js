import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Homepage } from './item/homepage';
import { ItemForm } from './item/itemForm';

export class App extends Component {
  number = 2;
  render() {
    return (
      <div>
        <ItemForm />
        <Homepage />

      </div>
    );
  }


}

export default App;
