import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';
import RepoDetailsDisplay from './components/RepoDetailsDisplay';

import axios from 'axios';


function App() {

  const [githubName, setGithubName] = useState('');
  // const [data, setData] = useState(null);

  // const USERNAME = 'kallaway';
  // const repo_URL = `https://api.github.com/users/${USERNAME}/events`;
  // const repo_URL = `https://api.github.com/users/anncrypt/events`;


  // useEffect(() => {
  //   const request = async () => {
     
  //     await axios.get(`${repo_URL}`)
  //       .then(res => {
  //         const forkedRepos = res.type.filter(repo => repo.type === "ForkEvent");
  //         setData({ forkedRepos });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //     }
  //     request();
  // }, []);



  const handleChange = (e) => {
    setGithubName(e.target.value);
  }

  return (
    <div className="App">
      <StyledContentWrapper>
        {/* <p>{console.log(data)}</p> */}
       <InputForm
          githubName={githubName}
          handleChange={handleChange}
        />
        <RepoDetailsDisplay />
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
