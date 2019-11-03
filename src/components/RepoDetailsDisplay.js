import React from 'react';
import styled from 'styled-components';
import ForkedRepoCard from './ForkedRepoCard';
import PullReqCard from './PullReqCard';
import RepoHeading from './RepoHeading';
import Button from './Button';

import { connect } from 'react-redux'; 
import { setAppStep } from '../actions'


const RepoDetailsDispaly = (props) => {

  const handleReset = () => {
    props.setStep(1);
  }

  return (
    <StyledRepoDetailsDisplay>
      <Button handleReset={handleReset}>Reset</Button>
      <StyledHeader>{props.githubName}</StyledHeader>
      <RepoHeading>Recent Forks</RepoHeading>
      <ForkedRepoCard forkedRepos={props.forkedRepos} />
      <RepoHeading>Recent Pull Requests</RepoHeading>
      <PullReqCard pullRequests={props.pullRequests} />
    </StyledRepoDetailsDisplay>
  );
}

// styles
const StyledRepoDetailsDisplay = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;

  display: flex;
  align-self: center;
`;

const mapStateToProps = (state) => {
  return {
    pullRequests: state.pullRequests,
    forkedRepos: state.forkedRepos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStep: step => {
      dispatch(setAppStep(step))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetailsDispaly);