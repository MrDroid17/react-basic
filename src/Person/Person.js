import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <h4 onClick={props.click}>My name is <span className="pointer">{props.name}</span> Kumar. I am {props.age} years old.</h4>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person;