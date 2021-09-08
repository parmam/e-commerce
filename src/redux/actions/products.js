import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from '../constants'
import axios from 'axios'

export const getProducts = () => async (dispatch) => {
  const products = await axios.get('http://localhost:3001/products', { withCredentials: true })
  return dispatch({
    type: GET_ALL_PRODUCTS,
    payload: products.data
  })
}

export const getProductsDetails = (id) => async (dispatch) => {
  const product = await axios.get(`http://localhost:3001/product/${id}`, { withCredentials: true })
  console.log(product)
  return dispatch({
    type: GET_PRODUCT_DETAIL,
    payload: product.data
  })
}
