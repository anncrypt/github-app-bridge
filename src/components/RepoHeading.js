import React from 'react';
import styled from 'styled-components';

const RepoHeading = (props) => {
  return (
    <StyledHeading>
     {props.text}
    </StyledHeading>
  );
}

// styles
const StyledHeading = styled.h2`
  font-size: 2rem;
`;

export default RepoHeading;