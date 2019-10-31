import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import Button from './Button';

const InputForm = (props) => {
  return (
    <StyledInputForm>
      <InputField
        inputLabel="Github Username:"
        githubName={props.githubName}
        handleChange={props.handleChange}
      />
      <Button />
    </StyledInputForm>
  );
}

// styles
const StyledInputForm = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
`;

export default InputForm;