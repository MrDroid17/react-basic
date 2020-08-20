import React, { Component } from 'react';
import styleClasses from './Person.module.css';

class Person extends Component {
  render(){
    return [
      // <div className={styleClasses.person}>
        <h4 key="i1" onClick={this.props.click}>My name is <span className={styleClasses.tooltip}>{this.props.name}<span className={styleClasses.tooltiptext}> Click the name to delete the person.</span></span> . I am {this.props.age} years old.</h4>,
        <p key="i2">{this.props.children}</p>,
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      // </div>
    ];
  }
}

export default Person;