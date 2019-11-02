import React from 'react';
import styled from 'styled-components';


const RepoHeading = ({ children }) => {
  return (
    <StyledHeading>
     {children}
    </StyledHeading>
  );
}

// styles
const StyledHeading = styled.h2`
  font-size: 2rem;
`;

export default RepoHeading;