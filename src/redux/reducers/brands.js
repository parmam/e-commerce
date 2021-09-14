
import {
  GET_ALL_BRANDS,
  POST_BRAND
} from '../constants'

const initialState = {
  allBrands: []
}

const brands = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload
      }
    case POST_BRAND:
      return {
        ...state,
        allBrands: action.payload
      }
    default:
      return state
  }
}

export default brands
