import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Padam", age: "28" },
      { name: "Jerry", age: "49" },
      { name: "Elaine", age: "52" }
    ],
    otherState: "Some other value",
    showPersons: false

  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "PadamB", age: "28" },
        { name: event.target.value, age: "49" },
        { name: "Elaine", age: "53" }
      ]
    })
  }

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
            click = {()=> this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>

      );
    }

    return (
      <div className="App" >
        <h1>React Demo App</h1>
        <p> This is a p tag </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
        {persons}

      </div>
    );
  }
}

export default App;
