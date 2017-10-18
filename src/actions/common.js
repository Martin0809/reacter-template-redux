import { USER_INFO } from '../constants';

export function getUserInfo() {
  return dispatch => {
    dispatch({
      type: USER_INFO,
      json: {user: 'Martin'},
      receivedAt: Date.now()
    });
  };
}
