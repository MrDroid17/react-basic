import React, { Component } from 'react';
import styleClasses from './Person.module.css';

class Person extends Component {
  render(){
    return (
      <div className={styleClasses.person}>
        <h4 onClick={this.props.click}>My name is <span className={styleClasses.tooltip}>{this.props.name}<span className={styleClasses.tooltiptext}> Click the name to delete the person.</span></span> . I am {this.props.age} years old.</h4>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </div>
    )
  }
}

export default Person;