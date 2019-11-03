import React from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

import { connect } from 'react-redux';
import { setGithubName, setAppStep } from '../actions';


const InputForm = (props) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <StyledInputForm onSubmit={handleFormSubmit} >
      {/* error handling in case username doesn't exist or api request failed */}
      {props.errAPI && <ErrorMessage>
        Sorry, something went wrong... Make sure GitHub username is correct.
      </ErrorMessage>}
      <InputField inputLabel="Github Username:" />
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


const mapStateToProps = (state) => {
  return {
    errAPI: state.errAPI
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setGithubName: name => {
      dispatch(setGithubName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);