import React from 'react';
import styled from 'styled-components';

const ForkedRepoCard = ({ forkedRepos }) => {

  return (
    <StyledCard>
      {!forkedRepos ? <div>Loading...</div> : forkedRepos.map(forked => {

        // destructuring received data
        const { forkee } = forked.payload;
        const { name } = forked.repo;

        return (
          <>
            <StyledHeading 
              href={forkee.html_url} 
              target="_blank"
            >
              {forkee.full_name}
            </StyledHeading>
            <StyledText>Forked From: {name}</StyledText>
          </>
        );
      })}
    </StyledCard>
  )
}

// styles
const StyledCard = styled.div`
  border: 3px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 20px;
  color: #333;
`;

const StyledHeading = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  color: #f56991;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    color: #f56970;
  }
`;

const StyledText = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
  margin-top: 10px;
`;


export default ForkedRepoCard;