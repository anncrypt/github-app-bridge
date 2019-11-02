import React from 'react';
import styled from 'styled-components';
import ForkedRepoCard from './ForkedRepoCard';
import PullReqCard from './PullReqCard';
import RepoHeading from './RepoHeading';

const RepoDetailsDispaly = ({ githubName, pullRequests, forkedRepos }) => {
  return (
    <StyledRepoDetailsDisplay>
      <StyledHeader>{githubName}</StyledHeader>
      <RepoHeading text="Recent Forks" />
      <ForkedRepoCard forkedRepos={forkedRepos} />
      <RepoHeading text="Recent Pull Requests" />
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
`;

export default RepoDetailsDispaly;