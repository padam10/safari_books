import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App" >
      <h1>I am react App</h1>
      <p> This is a p tag </p>
      <Person name = "Padam" age = "25" ></Person>
      <Person name = "Jerry" age = "50"> His Hobbies: Cars</Person>
      <Person name = "Elaine" age = "51"></Person>
      </div>
    );
  }
}

export default App;
