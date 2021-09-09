import { GET_ALL_PRODUCTS, GET_BESTS, GET_PRODUCT_DETAIL, POST_PRODUCT } from '../constants'
import axios from 'axios'

export const getProducts = () => async (dispatch) => {
  const products = await axios.get('http://localhost:3001/products', { withCredentials: true })
  return dispatch({
    type: GET_ALL_PRODUCTS,
    payload: products.data
  })
}

export const getProductsDetails = (id) => async (dispatch) => {
  const product = await axios.get(`http://localhost:3001/products/${id}`, { withCredentials: true })
  console.log(product)
  return dispatch({
    type: GET_PRODUCT_DETAIL,
    payload: product.data
  })
}

export const getBestProducts = (n) => async (dispatch) => {
  const bests = await axios.get(`http://localhost:3001/products/best/${n}`, { withCredentiales: true })
  console.log(bests)
  return dispatch({
    type: GET_BESTS,
    payload: bests.data
  })
}

export const addProducts = (newProduct) => async (dispatch) => {
  console.log(newProduct)
  const product = await axios.post('http://localhost:3001/products/add', newProduct, { withCredentials: true })
  console.log(product)
  return dispatch({
    type: POST_PRODUCT,
    payload: product.data
  })
}
