import React from 'react';

const person = (props) => {
  return (
    <div>
      <h4>My name is {props.name} Kumar. I am {props.age} years old.</h4>
      <p>{props.children}</p>
    </div>
  )
}

export default person;