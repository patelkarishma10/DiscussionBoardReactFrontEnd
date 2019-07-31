import React, { Component } from 'react';
import axios from "axios";

//import logo from './logo.svg';
import './App.css';
import { Homepage } from './item/homepage';
import { ItemForm } from './item/itemForm';
import { NavBar } from './item/navBar';


export class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  onLoad = () => {
    axios
      .get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
          data: response.data
          
        });
      })
  }


  componentDidMount() {
    this.onLoad();

  }


  render() {
    return (
      <div>
        <NavBar />
        <ItemForm passedFunction={this.onLoad} />
        <Homepage passedFunction={this.onLoad} dataSent={this.state.data} />

      </div>
    );
  }


}

export default App;
