import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import Button from './Button';

const InputForm = ({ githubName, handleChange, onSubmit}) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <StyledInputForm
      onSubmit={handleFormSubmit}
    >
      <InputField
        inputLabel="Github Username:"
        githubName={githubName}
        handleChange={handleChange}
      />
      <Button />
    </StyledInputForm>
  );
}

// styles
const StyledInputForm = styled.form`
  width: 30%;

  display: flex;
  flex-direction: column;
`;

export default InputForm;