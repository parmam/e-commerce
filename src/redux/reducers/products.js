import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from '../constants'

const initialState = {
  allProducts: [],
  productDetail: {}
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      console.log(action.payload)
      return {
        ...state,
        allProducts: action.payload
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      }
    default:
      return state
  }
}

export default products
