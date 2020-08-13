import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  boxShadow: 0 2px 3px blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

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
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0 2px 3px blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonFunction(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.updatePersonHandler(event, person.id)}
              >{person.profession}</Person>
            })
          }
          {/* <h3>Above is dyanamic list</h3>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>{this.state.persons[0].profession}</Person>
          <Person
            name={this.state.persons[1].name}
            changed={this.inputPersonHandler}
            age={this.state.persons[1].age}>{this.state.persons[1].profession}</Person>
          <Person
            name={this.state.persons[2].name}
            click={this.updatePersonHandler.bind(this, 'Sobhit AKA Babloo')}
            age={this.state.persons[2].age}>{this.state.persons[2].profession}</Person> */}
        </div >
      );
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // const classes = ['red', 'bold'].join(' ');
    const classes = [];

    /**
     * Add condition based styling
     */
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');


    return (
        <div className="App">
          <p className={classes.join(' ')}>This is really working</p>
          {/* <button
          style={buttonStyle}
          onClick={() => this.updatePersonHandler('Babloo!!')}>Update person</button> */}
          <StyledButton
            onClick={this.togglePersonFunction}>toggle persons</StyledButton>
          {persons}

        </div>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Tell me about react.'))
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
