import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello  World!</h1>
      <p>This is really working</p>
      <Person name="Sobhit" age="23">I am Software Engg by profession.</Person>
      <Person name="Mohit" age="30" >I am Teacher by profession.</Person>
      <Person name="Arpit" age="29" >I am Interior Designer by profession.</Person>

    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
}

export default App;
