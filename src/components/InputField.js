import React from 'react';
import styled from 'styled-components';

const InputField = (props) => {

  // const handleChange = (e) => {
  //   setGithubName({ githubName: e.target.value });
  // }

  return (
    <>
      <StyledLabel htmlFor="githubUsername">{props.inputLabel}</StyledLabel>
      <input 
        type="text"
        name="githubUsername"
        value={props.githubName}
        onChange={props.handleChange}
      />
    </>
  )
}

// styles
const StyledLabel = styled.label`
  font-size: 1.5rem;
  color: #2A2B2A;
  font-weight: bold;
`;


export default InputField;