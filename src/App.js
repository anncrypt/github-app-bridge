import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';

import axios from 'axios';


function App() {

  const [githubName, setGithubName] = useState('');

  // const USERNAME = 'anncrypt';
  // const repo_URL = `https://api.github.com/users/${USERNAME}/repos`;

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const request = async () => {
     
  //     await axios.get(`${repo_URL}`)
  //       .then(res => {
  //         const forkedRepos = res.data.filter(repo => repo.fork);
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
      <ContentWrapper>
       <InputForm
          githubName={githubName}
          handleChange={handleChange}
        />
      </ContentWrapper>
    </div>
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

export default App;
