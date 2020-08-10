import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const responsiveStyle = {
    '@media (max-width:900px)': {
      width: '650px',
      backgroundColor: 'salmon'
    },
    '@media (max-width:600px)': {
      width: '450px',
      backgroundColor: 'lightgray'
    }
  }

  return (
    <div className="person" style={responsiveStyle}>
      <h4 onClick={props.click}>My name is <span className="pointer">{props.name}</span> Kumar. I am {props.age} years old.</h4>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default Radium(person);