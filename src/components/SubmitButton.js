import React from 'react';
import styled from 'styled-components';

const SubmitButton = () => {

  return (
    <StyledButton type="submit">
      Get User
    </StyledButton>
  )
}

// styles
const StyledButton = styled.button`
  font-size: 1.8rem;
  height: 60px;
  border: none;
  border-radius: 8px;
  background: #f56991;
  background: linear-gradient(-180deg, #ff55a3, #f56991 90%);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: #f9429e;
    background: linear-gradient(-180deg, #ff5593, #f56970 90%);
  }
`;


export default SubmitButton;