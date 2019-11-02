import React from 'react';
import styled from 'styled-components';
import ForkedRepoCard from './ForkedRepoCard';
import PullReqCard from './PullReqCard';
import RepoHeading from './RepoHeading';
import Button from './Button';


const RepoDetailsDispaly = ({ githubName, pullRequests, forkedRepos, handleReset }) => {
  return (
    <StyledRepoDetailsDisplay>
      <Button handleReset={handleReset}>Reset</Button>
      <StyledHeader>{githubName}</StyledHeader>
      <RepoHeading>Recent Forks</RepoHeading>
      <ForkedRepoCard forkedRepos={forkedRepos} />
      <RepoHeading>Recent Pull Requests</RepoHeading>
      <PullReqCard pullRequests={pullRequests} />
    </StyledRepoDetailsDisplay>
  );
}

// styles
const StyledRepoDetailsDisplay = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;

  display: flex;
  align-self: center;
`;

export default RepoDetailsDispaly;