import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

  // const handleChange = (e) => {
  //   setGithubName({ githubName: e.target.value });
  // }

  return (
    <StyledButton>Get User</StyledButton>
  )
}

// styles
const StyledButton = styled.button`
  font-size: 1.5rem;
  background: #5DBCD2;
  color: white;
  text-transform: uppercase;
`;


export default Button;