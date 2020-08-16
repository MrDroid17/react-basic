import React from 'react';
import styleClasses from './Cockpit.module.css'

const cockpit = (props) => {
  const classes = [];
  let buttonClass = [styleClasses.buttonStyle];
  if (props.showPersons) buttonClass.push(styleClasses.Red);

  if (props.persons.length <= 2) classes.push(styleClasses.red);
  if (props.persons.length <= 1) classes.push(styleClasses.bold);


  return (
    <div  >
      <h4 className={styleClasses.appTitle}>{props.title}</h4>
      <p className={classes.join(' ')}>This is really working</p>
      <button className={buttonClass.join(' ')}
        onClick={props.clicked}>Toggle persons</button>
    </div>
  )
}

export default cockpit;