import { GET_ALL_PRODUCTS, GET_BESTS, GET_PRODUCT_DETAIL, POST_PRODUCT, DELETE_PRODUCTS } from '../constants'
import axios from 'axios'
import { ApiURL } from '../../config'
export const getProducts = (products) => async (dispatch) => {
  try {
    const products = await axios.get(`${ApiURL}/products`, { withCredentials: true })
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    const product = await axios.get(`${ApiURL}/products/detail/${id}`, { withCredentials: true })
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: product.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getBestProducts = (n) => async (dispatch) => {
  const bests = await axios.get(`${ApiURL}/products/best/${n}`, { withCredentiales: true })
  return dispatch({
    type: GET_BESTS,
    payload: bests.data
  })
}

export const addProducts = (newProduct) => async (dispatch) => {
  const product = await axios.post(`${ApiURL}/products/add`, newProduct, { withCredentials: true })
  return dispatch({
    type: POST_PRODUCT,
    payload: product.data
  })
}

export const removeProducts = (idsArr) => async (dispatch) => {
  const product = {
    idProducts: idsArr
  }
  JSON.stringify(product)
  const deletedProducts = await axios.put(`${ApiURL}/products/deleteproducts`, product, { withCredentials: true })
  return dispatch({
    type: DELETE_PRODUCTS,
    payload: deletedProducts.data
  })
}
