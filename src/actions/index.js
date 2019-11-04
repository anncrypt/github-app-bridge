import axios from 'axios';

export const SET_GITHUB_NAME = 'SET_GITHUB_NAME';
export const SET_APP_STEP = 'SET_APP_STEP';
export const GET_GITHUB_EVENTS_SUCCESS = 'GET_GITHUB_EVENTS_SUCCESS';
export const GET_GITHUB_EVENTS_ERROR = 'GET_GITHUB_EVENTS_ERROR';

export const setGithubName = (name) => {
  return {
    type: SET_GITHUB_NAME,
    payload: name
  }
};

export const setAppStep = (step) => ({
  type: SET_APP_STEP,
  payload: step
});

export const getGithubEvents = () => {
  return (dispatch, getState) => {
    const state = getState();

    const repo_URL = `https://api.github.com/users/${state.githubName}/events`;

    const request = async () => {
      await axios.get(`${repo_URL}`)
        .then(res => {
          // filter received api response data by type and saving to related constants
          const reposForked = res.data.filter(repo => repo.type === "ForkEvent");
          const pullReq = res.data.filter(repo => repo.type === "PullRequestEvent");
          dispatch({
            type: GET_GITHUB_EVENTS_SUCCESS,
            payload: {
              forkedRepos: reposForked,
              pullRequests: pullReq
            }
          });

        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: GET_GITHUB_EVENTS_ERROR,
            error: error
          });
        })
    }
    request();
  }
}
