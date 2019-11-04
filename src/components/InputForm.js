import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';

import store from '../state/store';

import { connect } from 'react-redux';
import { setGithubName, getGithubEvents } from '../actions';

const InputForm = (props) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // move async call to thunk
    store.dispatch(props.getGithubEvents());
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
    errAPI: state.errAPI,
    githubName: state.githubName
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    setGithubName: name => {
      dispatch(setGithubName(name));
    },
    getGithubEvents,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);