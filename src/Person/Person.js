import React from 'react';

const person = (props) => {
  return (
    <div>
      <h4 onClick={props.click}>My name is <span className="pointer">{props.name}</span> Kumar. I am {props.age} years old.</h4>
      <p>{props.children}</p>
    </div>
  )
}

export default person;