import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import InputForm from './components/InputForm';
import RepoDetailsDisplay from './components/RepoDetailsDisplay';

function App (props) {
  return (
    <div className="App">
      <StyledContentWrapper>
        { props.appStep === 1 && <InputForm /> }
        { props.appStep === 2 && <RepoDetailsDisplay /> }
      </StyledContentWrapper>
    </div>
  );
}

// styles
const StyledContentWrapper = styled.div`
  font-family: sans-serif;
  height: 90vh;
  font-size: 62.5%;
  color: #24292e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    appStep: state.appStep,
    githubName: state.githubName
  }
}

export default connect(mapStateToProps)(App);
