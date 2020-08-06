import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'


/**
 * Class based component with setState
 */
class App extends Component {
  state = {
    persons: [
      { name: "Sobhit", age: 24, profession: "I am Software Engg by profession." },
      { name: "Mohit", age: 30, profession: "I am Teacher by profession." },
      { name: "Arpit", age: 29, profession: "I am Interior Designer by profession." },
    ],
    otherState: "additional Info..."
  }

  updatePersonHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28, profession: "I am Senior Software Engg by profession." },
        { name: "Mohit", age: 32, profession: "I am assistant Professor by profession." },
        { name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
      ],
      otherState: 'Some Other state',
      showPersons: false
    })
  }
  inputPersonHandler = (event) => {
    this.setState({
      persons: [
        { name: "Babloo", age: 28, profession: "I am Senior Software Engg by profession." },
        { name: event.target.value, age: 32, profession: "I am assistant Professor by profession." },
        { name: "Arpit", age: 29, profession: "I am senior Interior Designer by profession." },
      ]
    })
  }
  togglePersonFunction = () => {
    const toggle = this.state.showPersons;
    this.setState({ showPersons: !toggle });
  }
  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0 2px 3px blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
          {
            this.state.persons.map(person =>{
              return  <Person
              name={person.name}
              age={person.age}>{person.profession}</Person>
            })
          }
          <h3>Above is dyanamic list</h3>
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
          age={this.state.persons[2].age}>{this.state.persons[2].profession}</Person>
        </div> 
      )
    }


    return (
      <div className="App">
        <p>This is really working</p>
        <button
          style={buttonStyle}
          onClick={() => this.updatePersonHandler('Babloo!!')}>Update person</button>
        <button
          style={buttonStyle}
          onClick={this.togglePersonFunction}>toggle persons</button>
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
