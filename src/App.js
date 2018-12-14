import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      { name:"Padam",age: "28" },
      { name:"Jerry",age: "49" },
      { name:"Elaine",age: "52" }
    ]
  }

  swithNameHandler = () =>{
    console.log("was clicked");
  }

  render() {
    return (
      <div className="App" >
      <h1>I am react App</h1>
      <p> This is a p tag </p>
      <button onClick={this.swithNameHandler}> Switch Name </button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} ></Person>      
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} ></Person>      
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} ></Person>      
      </div>
    );
  }
}

export default App;
