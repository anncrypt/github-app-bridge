import React from 'react';
import styled from 'styled-components';

const RepoCard = ({ pullRequests }) => {

  return (
    <StyledCard>
      {!pullRequests ? <div>Loading...</div> : pullRequests.map(pulled => {

        // destructuring received data
        const { pull_request, action } = pulled.payload;

        return (
          <>
            <StyledHeading 
              href={pull_request.html_url} 
              target="_blank"
            >
              {pull_request.title}
            </StyledHeading>
            <StyledText>Status: {action}</StyledText>
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


export default RepoCard;