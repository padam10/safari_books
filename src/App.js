import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      { name:"Padam",age: "28" },
      { name:"Jerry",age: "49" },
      { name:"Elaine",age: "52" }
    ],
    otherState: "Some other value"
  }

  swithNameHandler = () =>{
    // Don't do this: this.state.persons[0].name = "Padam"
    this.setState({
      persons: [
        { name:"PadamB",age: "28" },
        { name:"Jerry",age: "49" },
        { name:"Elaine",age: "53" }
      ]})
  }

  nameChangedHandler = (event) =>{
  this.setState({
    persons: [
      { name:"PadamB",age: "28" },
      { name: event.target.value,age: "49" },
      { name:"Elaine",age: "53" }
    ]})
  }

  render() {
    return (
      <div className="App" >
      <h1>React Demo App</h1>
      <p> This is a p tag </p>
      <button onClick={this.swithNameHandler}> Switch Name </button>
      <Person
       name = {this.state.persons[0].name}
        age = {this.state.persons[0].age} >
      </Person> 

      <Person 
      name = {this.state.persons[1].name}
       age = {this.state.persons[1].age} 
       click={this.swithNameHandler.bind(this,"Kramer")}
       changed = {this.nameChangedHandler}> My Hobbies: racing
       </Person>    

      <Person 
      name = {this.state.persons[2].name}
      age = {this.state.persons[2].age} >
      </Person>      
      </div>
    );
  }
}

export default App;
