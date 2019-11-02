import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import SubmitButton from './SubmitButton';


const InputForm = ({ githubName, handleChange, onSubmit, errorAPI }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <StyledInputForm
      onSubmit={handleFormSubmit}
    >
      {/* error handling in case username doesn't exist or api request failed */}
      {errorAPI && <ErrorMessage>
        Sorry, something went wrong... Make sure GitHub username is correct.
      </ErrorMessage>}
      <InputField
        inputLabel="Github Username:"
        githubName={githubName}
        handleChange={handleChange}
      />
      <SubmitButton />
    </StyledInputForm>
  );
}

// styles
const StyledInputForm = styled.form`
  width: 30%;

  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.3rem;
`;

export default InputForm;