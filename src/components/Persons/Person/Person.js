import React, { Component, Fragment} from 'react';
import styleClasses from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
  render(){
    return (
      // <div className={styleClasses.person}>
      <Aux>
        <h4 key="i1" onClick={this.props.click}>My name is <span className={styleClasses.tooltip}>{this.props.name}<span className={styleClasses.tooltiptext}> Click the name to delete the person.</span></span> . I am {this.props.age} years old.</h4>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>

      // </div>
    );
  }
}

export default Person;