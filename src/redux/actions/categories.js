import axios from 'axios'
import {
  GET_ALL_CATEGORIES,
  GET_ALL_SUBCATEGORIES,
  GET_SUBCATEGORIES_OF,
  POST_SUBCATEGORY,
  POST_CATEGORY,
  DELETE_CATEGORY
} from '../constants'
import { ApiURL } from '../../config'
export const getCategories = () => async (dispatch) => {
  const categories = await axios.get(`${ApiURL}/categories`, { withCredentials: true })
  return dispatch({
    type: GET_ALL_CATEGORIES,
    payload: categories.data
  })
}

export const getSubCategories = () => async (dispatch) => {
  const subCategories = await axios.get(`${ApiURL}/categories/getSub/All`, { withCredentials: true })
  return dispatch({
    type: GET_ALL_SUBCATEGORIES,
    payload: subCategories.data
  })
}

export const getSubCategoriesOf = (categoryOfSubcategory) => async (dispatch) => {
  const subCategoriesOf = await axios.get(`${ApiURL}/categories/getSub:${categoryOfSubcategory}`, { withCredentials: true })
  console.log(categoryOfSubcategory, ' actions subcategoryof actions')
  console.log(subCategoriesOf, '  ', categoryOfSubcategory )
  return dispatch({
    type: GET_SUBCATEGORIES_OF,
    payload: subCategoriesOf.data
  })
}

export const addCategory = (newCategory) => async (dispatch) => {
  const response = await axios.post(`${ApiURL}/categories/add/`, {name:newCategory}, { withCredentials: true })
  if(response.request.status === 200){
    const categories = await axios.get(`${ApiURL}/categories`, { withCredentials: true })
    return dispatch({
      type: POST_CATEGORY,
      payload: categories.data
    })
  }
}

export const addSubCategory = (newSubCategory) => async (dispatch) => {
  const response = await axios.post(`${ApiURL}/categories/addSub`, newSubCategory, { withCredentials: true })
  if(response.request.status === 200){
    const subCategoriesOf = await axios.get(`${ApiURL}/categories/getSubParams:${newSubCategory.category}`, { withCredentials: true })
    console.log(subCategoriesOf.data, 'llegan las subcat')
  }
  return dispatch({
    type: POST_SUBCATEGORY,
    payload: response.data
  })
}

export const removeCategory = (categoryRemover) => async (dispatch) => {
  const categoryDeleted = await axios.delete(`${ApiURL}`, {name: categoryRemover},{ withCredentials: true })
  if(categoryDeleted.request.status === 200){
    const categories = await axios.get(`${ApiURL}`, { withCredentials: true })
    return dispatch({
      type: DELETE_CATEGORY,
      payload: categories.data
    })
  }
}