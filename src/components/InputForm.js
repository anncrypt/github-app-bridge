import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';
import axios from 'axios';

import { connect } from 'react-redux';
import { setGithubName, getGithubEventsSuccess, getGithubEventsError } from '../actions';

const InputForm = (props) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const repo_URL = `https://api.github.com/users/${props.githubName}/events`;

    const request = async () => {
      await axios.get(`${repo_URL}`)
        .then(res => {
          // filter received api response data by type and saving to related constants
          const reposForked = res.data.filter(repo => repo.type === "ForkEvent");
          const pullReq = res.data.filter(repo => repo.type === "PullRequestEvent");
          // updating state with received data
          props.onRequestSuccess(reposForked, pullReq);
        })
        .catch((error) => {
          console.log(error);
          props.onRequestError(error);
        })
    }
    request();
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

const mapDispatchToProps = (dispatch) => {
  return {
    setGithubName: name => {
      dispatch(setGithubName(name));
    },
    onRequestSuccess: (forkedRepos, pullRequests) => {
      dispatch(getGithubEventsSuccess(forkedRepos, pullRequests));
    },
    onRequestError: error => {
      dispatch(getGithubEventsError(error));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);