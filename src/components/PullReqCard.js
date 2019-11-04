import React from 'react';
import styled from 'styled-components';

const RepoCard = ({ pullRequests }) => {

  // we are still waiting for data from the api
  if (!pullRequests) {
    return null;
  }
  // there are no pull requests to display
  if (pullRequests.length === 0) {
    return <StyledMessage>No recent pull requests found :(</StyledMessage>;
  }

  return (
    <>
      {pullRequests
        .filter((item, index) => index < 5)
        .map((pulled, index) => {

          // destructuring received data
          const { pull_request, action } = pulled.payload;
          const key = `${pull_request.html_url}-${index}`;

          return (
            <StyledCard key={key}>
              <StyledHeading 
                href={pull_request.html_url} 
                target="_blank"
              >
                {pull_request.title}
              </StyledHeading>
              <StyledText>Status: {action}</StyledText>
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

export default RepoCard;