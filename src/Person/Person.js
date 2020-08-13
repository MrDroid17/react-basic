import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
.person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center; 
}
'@media (max-width:900px)': {
  width: '650px',
  backgroundColor: 'salmon'
},
'@media (max-width:600px)': {
  width: '450px',
  backgroundColor: 'lightgray'
}  
`;

const person = (props) => {

  return (
    <StyledDiv>
      <h4 onClick={props.click}>My name is <span className="pointer">{props.name}</span> Kumar. I am {props.age} years old.</h4>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </StyledDiv>

  )
}

export default person;