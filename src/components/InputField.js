import React from 'react';
import styled from 'styled-components';


const InputField = ({ inputLabel, githubName, handleChange }) => {

  return (
    <>
      <StyledLabel htmlFor="githubUsername">{inputLabel}</StyledLabel>
      <StyledInput 
        type="text"
        placeholder="Type Something..."
        name="githubUsername"
        value={githubName}
        onChange={handleChange}
      />
    </>
  )
}

// styles
const StyledLabel = styled.label`
  font-size: 1.8rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 50px;
  color: #24292e;
  font-size: 1.5rem;
  margin-bottom: 25px;
  padding-left: 10px;
  border: 3px solid #dcdcdc;
  border-radius: 5px;
`;


export default InputField;