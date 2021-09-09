import { LOGIN_USER } from '../constants'

const initialState = {
  user: {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: state
      }
    default:
      return state
  }
}

export default user
