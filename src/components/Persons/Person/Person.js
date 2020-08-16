import React from 'react';
import styleClasses from './Person.module.css';

const person = (props) => {
  console.log('[Person.js] render...');
  return (
    <div className={styleClasses.person}>
      <h4 onClick={props.click}>My name is <span className="pointer">{props.name}</span>. I am {props.age} years old.</h4>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>

  )
}

export default person;