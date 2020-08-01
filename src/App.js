import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
      { name: "Mohit", age: 30, profession: "I am Teacher by profession." },
      { name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
    ]
  }

  render() {
    return (
      <div className="App">
        <p>This is really working</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>{this.state.persons[0].profession}</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{this.state.persons[1].profession}</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>{this.state.persons[2].profession}</Person>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
  }
}

export default App;
