import React, { Component, useState } from 'react';
// import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styleClasses from './App.module.css';

/**
 * Class based component with setState
 */
class App extends Component {
  state = {
    persons: [
      { id: "id_001", name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
      { id: "id_002", name: "Mohit", age: 30, profession: "I am Teacher by profession." },
      { id: "id_003", name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
    ],
    otherState: "additional Info..."
  }

  updatePersonHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personsIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({
      persons: persons,
      otherState: 'Some Other state',
      // showPersons: false
    })
  }
  inputPersonHandler = (event) => {
    this.setState({
      persons: [
        { id: "id_001", name: "Babloo", age: 28, profession: "I am Senior Software Engg by profession." },
        { id: "id_002", name: event.target.value, age: 32, profession: "I am assistant Professor by profession." },
        { id: "id_003", name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
      ]
    })
  }
  togglePersonFunction = () => {
    const toggle = this.state.showPersons;
    this.setState({ showPersons: !toggle });
  }

  deletePersonFunction = (personIndex) => {
    const persons = [...this.state.persons]
    // const persons = this.state.persons.slice();  // alternanate method to copy
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonFunction}
        changed={this.updatePersonHandler}
      />
    }

    return (
      <div className={styleClasses.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonFunction}
        />
        {persons}
      </div>

    );
  }
}

export default App;

/**
 * function based component with useState hook
 */
// const App = (props) => {
//   const [personsState, setNewPersonsState] = useState({
//     persons: [
//       { name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
//       { name: "Mohit", age: 30, profession: "I am Teacher by profession." },
//       { name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
//     ],
//     otherState: "additional Info..."
//   })

//   console.log('Person State=========>', personsState)

//   const updatePersonHandler = () => {
//     setNewPersonsState({
//       persons: [
//         { name: "Sobhit", age: 28, profession: "I am Senior Software Engg by profession." },
//         { name: "Mohit", age: 32, profession: "I am assistant Professor by profession." },
//         { name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
//       ],
//       otherState: personsState.otherState
//     })
//   }

//   return (
//     <div className="App">
//       <p>This is really working</p>
//       <button onClick={updatePersonHandler}>Update person</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>{personsState.persons[0].profession}</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>{personsState.persons[1].profession}</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>{personsState.persons[2].profession}</Person>
//     </div>
//   );
//   // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
// }

// export default App;
