import React from 'react';
import styled from 'styled-components';


const ForkedRepoCard = ({ forkedRepos }) => {

  // we are still waiting for data from the api
  if (!forkedRepos) {
    return null;
  }
  // there are no forked repos to display
  if (forkedRepos.length === 0) {
    return <StyledMessage>No recent forked repos found :(</StyledMessage>;
  }

  return (
    <>
      {forkedRepos
        .filter((item, index) => index < 5)
        .map((forked, index) => {

          // destructuring received data
          const { forkee } = forked.payload;
          const { name } = forked.repo;
          const key = `${forkee.html_url}-${index}`;

          return (
            <StyledCard key={key}>
              <StyledHeading 
                href={forkee.html_url} 
                target="_blank"
              >
                {forkee.full_name}
              </StyledHeading>
              <StyledText>Forked From: {name}</StyledText>
            </StyledCard>
          );
        })}
    </>
  )
}

// styles
const StyledCard = styled.div`
  border: 3px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
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

const StyledMessage = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #f56991;
  margin: 0;
  padding-left: 20px;
`;


export default ForkedRepoCard;