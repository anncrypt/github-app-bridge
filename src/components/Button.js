import React from 'react';
import styled from 'styled-components';


const Button = ({ children, handleReset }) => {

  return (
    <StyledButton onClick={handleReset}>
      {children}
    </StyledButton>
  )
}

// styles
const StyledButton = styled.button`
  font-size: 1.5rem;
  width: 120px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #f56991;
  background: linear-gradient(-180deg, #ff55a3, #f56991 90%);
  color: white;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;

  display: flex;
  align-self: flex-end;

  :hover {
    background: #f9429e;
    background: linear-gradient(-180deg, #ff5593, #f56970 90%);
  }
`;


export default Button;