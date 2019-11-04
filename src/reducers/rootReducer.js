import { 
  SET_GITHUB_NAME, 
  SET_APP_STEP,
  GET_GITHUB_EVENTS_SUCCESS,
  GET_GITHUB_EVENTS_ERROR,
} from '../actions';

export const initialState = {
  githubName: '',
  forkedRepos: null,
  pullRequests: null,
  appStep: 1,
  errAPI: null
}

const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_GITHUB_NAME: 
      return {
        ...state,
        githubName: action.payload,
        errAPI: null
      }
    case SET_APP_STEP: 
      return {
        ...state,
        appStep: action.payload
      }
    case GET_GITHUB_EVENTS_SUCCESS:
      return {
        ...state,
        forkedRepos: action.payload.forkedRepos,
        pullRequests: action.payload.pullRequests,
        appStep: 2
      }
    case GET_GITHUB_EVENTS_ERROR: 
      return {
        ...state,
        errAPI: action.error
      }
    default: 
      return state
  }
}

export default rootReducer;

