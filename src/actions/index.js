export const SET_GITHUB_NAME = 'SET_GITHUB_NAME';
export const SET_APP_STEP = 'SET_APP_STEP';
export const GET_GITHUB_EVENTS_SUCCESS = 'GET_GITHUB_EVENTS_SUCCESS';
export const GET_GITHUB_EVENTS_ERROR = 'GET_GITHUB_EVENTS_ERROR';


export const setGithubName = (name) => ({
  type: SET_GITHUB_NAME,
  payload: name
});

export const setAppStep = (step) => ({
  type: SET_APP_STEP,
  payload: step
});

export const getGithubEventsSuccess = (forkedRepos, pullRequests) => ({
  type: GET_GITHUB_EVENTS_SUCCESS,
  payload: {
    forkedRepos,
    pullRequests
  }
});

export const getGithubEventsError = (error) => ({
  type: GET_GITHUB_EVENTS_ERROR,
  error: error
});