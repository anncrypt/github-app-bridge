import rootReducer, { initialState } from '../reducers/rootReducer';
import { SET_GITHUB_NAME } from '../actions';

describe('Root Reducer', () => {
  test('Should update github name', () => {
    const testUsername = 'test_username';
    const githubNameAction = {
      type: SET_GITHUB_NAME,
      payload: testUsername,
    };

    const reduced = rootReducer(initialState, githubNameAction);

    expect(reduced.githubName).toEqual(testUsername);
  });

});

