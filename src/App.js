import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id:'av',name: "Padam", age: "28" },
      { id: 'dd',name: "Jerry", age: "49" },
      {id: 'cds', name: "Elaine", age: "52" }
    ],
    otherState: "Some other value",
    showPersons: false

  }


  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
     return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons:persons });
  }

deletePersonHandler = (personIndex) => {
  // create an copy of an array before deleting an element from it
   const persons = [...this.state.persons];//create a copy of array- immutable way
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
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
              age={person.age} 
              key = {person.id}
              changed = {(event)=> this.nameChangedHandler(event, person.id)}            
              />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App" >
        <h3 >React Demo App</h3>
        <p className ={classes.join(' ')}> This is a p tag </p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}> Toggle Persons </button>
        {persons}
      </div>
    );
  }
}

export default App;
