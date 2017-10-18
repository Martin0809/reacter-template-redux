import { USER_INFO } from '../constants';

const initialState = {
  userInfo: {
    user: 'userName',
  },
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.json
      })

    default:
      return state
  }
}
