import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';
import RepoDetailsDisplay from './components/RepoDetailsDisplay';

import axios from 'axios';
import { connect } from 'react-redux';
import { getGithubEventsSuccess, getGithubEventsError } from './actions';


function App(props) {

  const repo_URL = `https://api.github.com/users/${props.githubName}/events`;

  const handleFormSubmit = () => {
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
    <div className="App">
      <StyledContentWrapper>
        {props.appStep === 1 && 
          <InputForm
            onSubmit={handleFormSubmit}
          /> 
        }
        { props.appStep === 2 && <RepoDetailsDisplay /> }
      </StyledContentWrapper>
    </div>
  );
}

// styles
const StyledContentWrapper = styled.div`
  font-family: sans-serif;
  height: 90vh;
  font-size: 62.5%;
  color: #24292e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    appStep: state.appStep,
    githubName: state.githubName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSuccess: (forkedRepos, pullRequests) => {
      dispatch(getGithubEventsSuccess(forkedRepos, pullRequests));
    },
    onRequestError: error => {
      dispatch(getGithubEventsError(error));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
