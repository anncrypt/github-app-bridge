import React from 'react';
import styled from 'styled-components';

const RepoCard = (props) => {

  // const handleChange = (e) => {
  //   setGithubName({ githubName: e.target.value });
  // }

  return (
    <StyledRepoCard>
      <StyledHeading>anncrypt/personal-project-react</StyledHeading>
      <StyledText>Forked From: bridge-school/personal-project-react</StyledText>
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
  ${'' /* color: #696969; */}
  margin: 0;
`;


export default RepoCard;