import React from 'react';
import styled from 'styled-components';
import RepoCard from './RepoCard';
import RepoHeading from './RepoHeading';

const RepoDetailsDispaly = (props) => {
  return (
    <StyledRepoDetailsDisplay>
      <StyledHeader>username</StyledHeader>
      <RepoHeading text="Recent Forks" />
      <RepoCard />
      <RepoHeading text="Recent Pull Requests" />
      <RepoCard />
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