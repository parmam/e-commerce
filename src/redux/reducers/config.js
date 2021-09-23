
import {
  SET_NOTIFICATIONS_CONFIG,
  GET_NOTIFICATIONS_CONFIG
} from '../constants'

const initialState = {
  notificationsConfig: {}
}

const config = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS_CONFIG:
      return {
        ...state,
        notificationsConfig: action.payload
      }
    case GET_NOTIFICATIONS_CONFIG:
      return {
        ...state,
        notificationsConfig: action.payload
      }
    default:
      return state
  }
}

export default config
