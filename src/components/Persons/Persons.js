import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component{
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps.');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate.');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, nextState){
    console.log('[Persons.js] getSnapshotBeforeUpdate.');
    return {message: 'Snapshots!' };
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate.');
    console.log('Snapshots here--------->', Snapshot);
  }


  render() {
  console.log('[Persons.js] render...');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      >{person.profession}</Person>
    }); 
  }
}

export default Persons;