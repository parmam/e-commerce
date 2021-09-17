import { GET_ALL_PRODUCTS, GET_BESTS, GET_PRODUCT_DETAIL, DELETE_DETAILS, POST_PRODUCT, DELETE_PRODUCTS, PUT_PRODUCT } from '../constants'
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
    const formatedDetails = {
      id: product.data.id,
      img: product.data.img,
      brand: product.data.brand,
      model: product.data.model,
      category: product.data.subCategory.category.name,
      subCategory: product.data.subCategory.name,
      price: product.data.price,
      discount: product.data.discount,
      description: product.data.description,
      points: product.data.points
    }
    return dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: formatedDetails
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteDetails = () => {
  return {
    type: DELETE_DETAILS
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

export const editProducts = (editedProduct) => async (dispatch) => {
  const response = await axios.put(`${ApiURL}/products/edit`, editedProduct, { withCredentials: true })
  return dispatch({
    type: PUT_PRODUCT,
    payload: response.data
  })
}
