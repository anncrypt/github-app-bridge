import React from 'react';
import styled from 'styled-components';

const ForkedRepoCard = ({ forkedRepos }) => {

  return (
    <StyledRepoCard>
      { !forkedRepos ? <div>Loading...</div> : forkedRepos.map(forked => console.log(forked)) }
      {/* <StyledHeading>{forkedRepos}</StyledHeading> */}
      {/* <StyledText>Forked From: {forkedRepos.repo.name}</StyledText> */}
    </StyledRepoCard>
  )
}

// styles
const StyledRepoCard = styled.div`
  border: 3px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 20px;
  color: #333;
`;

const StyledHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #f56991;
  margin: 0;
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
`;


export default ForkedRepoCard;