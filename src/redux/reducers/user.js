import { LOGIN_USER, GET_USERS } from '../constants'

const initialState = {
  user: {},
  users: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: state
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default user
