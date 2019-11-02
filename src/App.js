import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';
import RepoDetailsDisplay from './components/RepoDetailsDisplay';

import axios from 'axios';


function App() {

  // App state
  const [githubName, setGithubName] = useState('');
  const [forkedRepos, setForkedRepos] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);


  const repo_URL = `https://api.github.com/users/${githubName}/events`;

  // helper functions
  const handleChange = (e) => {
    setGithubName(e.target.value);
  }

  const handleFormSubmit = () => {
    const request = async () => {

      await axios.get(`${repo_URL}`)
        .then(res => {
          // filter received api response data by type and saving to related constants
          const reposForked = res.data.filter(repo => repo.type === "ForkEvent");
          const pullReq = res.data.filter(repo => repo.type === "PullRequestEvent");
          // updating state with received data
          setForkedRepos(reposForked);
          setPullRequests(pullReq);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    request();
  }


  return (
    <div className="App">
      <StyledContentWrapper>
       <InputForm
          onSubmit={handleFormSubmit}
          githubName={githubName}
          handleChange={handleChange}
        />
        <RepoDetailsDisplay 
          githubName={githubName}
          forkedRepos={forkedRepos}
          pullRequests={pullRequests}
        />
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

export default App;
