import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import Button from './Button';

const InputForm = (props) => {
  return (
    <>
      <InputField
        inputLabel="Github Username:"
        githubName={props.githubName}
        handleChange={props.handleChange}
      />
      <Button />
    </>
  );
}

// styles
const ContentWrapper = styled.div`
  font-family: sans-serif;
  height: 90vh;
  font-size: 62.5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default InputForm;