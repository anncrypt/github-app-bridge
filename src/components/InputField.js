import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { setGithubName } from '../actions';


const InputField = (props) => {
 

  const handleChange = (e) => {
    props.setGithubName(e.target.value);
  }

  return (
    <>
      <StyledLabel htmlFor="githubUsername">{props.inputLabel}</StyledLabel>
      <StyledInput 
        type="text"
        placeholder="Type Something..."
        name="githubUsername"
        value={props.githubName}
        onChange={handleChange}
      />
    </>
  )
}

// styles
const StyledLabel = styled.label`
  font-size: 1.8rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 50px;
  color: #24292e;
  font-size: 1.5rem;
  margin-bottom: 25px;
  padding-left: 10px;
  border: 3px solid #dcdcdc;
  border-radius: 5px;
`;

const mapStateToProps = (state) => {
  return {
    githubName: state.githubName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGithubName: name => {
      dispatch(setGithubName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);