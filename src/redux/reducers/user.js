import { LOGIN_USER, GET_USERS, SET_LOGGED, LOG_OUT } from '../constants'

const initialState = {
  user: {},
  users: [],
  logged: false

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
    case SET_LOGGED:
      // console.log(action.payload)
      return { ...state, logged: action.payload }
    case LOG_OUT:
      return { ...state, logged: false }
    default:
      return state
  }
}

export default user
