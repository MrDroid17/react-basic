import React, { useEffect } from 'react';
import styleClasses from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(()=> {
    console.log('[Cockpit.js] useEffect');
    /**
     * You can Run Http request here.....
     */
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return ()=>{
      clearInterval(timer)
      console.log('[Cockpit.js]  Clean up in use effects.');
    }
  }, []);
  useEffect(()=> {
    console.log('[Cockpit.js] 2nd useEffect');

    return ()=>{
      console.log('[Cockpit.js]  Clean up in 2nd use effects.');
    }
  });

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

export default Cockpit;