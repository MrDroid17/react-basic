import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'
/**
 * function based component with useState hook
 */
const App = (props) => {
  const [personsState, setNewPersonsState] = useState({
    persons: [
      { name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
      { name: "Mohit", age: 30, profession: "I am Teacher by profession." },
      { name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
    ],
    otherState: "additional Info..."
  })

  console.log('Person State=========>', personsState)

  const updatePersonHandler = () => {
    setNewPersonsState({
      persons: [
        { name: "Sobhit", age: 28, profession: "I am Senior Software Engg by profession." },
        { name: "Mohit", age: 32, profession: "I am assistant Professor by profession." },
        { name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
      ],
      otherState: personsState.otherState
    })
  }

  return (
    <div className="App">
      <p>This is really working</p>
      <button onClick={updatePersonHandler}>Update person</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>{personsState.persons[0].profession}</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>{personsState.persons[1].profession}</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>{personsState.persons[2].profession}</Person>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
}

export default App;

/**
 * Class based component with setState
 */
// class App extends Component {
  // state = {
  //   persons: [
  //     { name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
  //     { name: "Mohit", age: 30, profession: "I am Teacher by profession." },
  //     { name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
  //   ],
  //   otherState: "additional Info..."
  // }

  // updatePersonHandler = () => {
  //   this.setState({
  //     persons: [
  //       { name: "Sobhit", age: 28, profession: "I am Senior Software Engg by profession." },
  //       { name: "Mohit", age: 32, profession: "I am assistant Professor by profession." },
  //       { name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
  //     ]
  //   })
  // }
//   render() {
//     return (
//       <div className="App">
//         <p>This is really working</p>
//         <button onClick={this.updatePersonHandler}>Update person</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>{personsState.persons[0].profession}</Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>{personsState.persons[1].profession}</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>{personsState.persons[2].profession}</Person>
//       </div>
//     );
//     // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
//   }
// }

// export default App;
