import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, GET_BESTS, POST_PRODUCT } from '../constants'

const initialState = {
  allProducts: [],
  productDetail: {},
  newProduct: {}
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
    case GET_BESTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case POST_PRODUCT:
      return {
        ...state,
        newProduct: action.payload
      }
    default:
      return state
  }
}

export default products
