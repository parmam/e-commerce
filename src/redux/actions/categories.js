import axios from 'axios'
import {
  GET_ALL_CATEGORIES,
  GET_ALL_SUBCATEGORIES,
  GET_SUBCATEGORIES_OF,
  POST_SUBCATEGORY,
  POST_CATEGORY
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

export const getSubCategoriesOf = (categorie) => async (dispatch) => {
  const subCategoriesOf = await axios.get(`${ApiURL}/categories/getSub/${categorie}`, { withCredentials: true })
  return dispatch({
    type: GET_SUBCATEGORIES_OF,
    payload: subCategoriesOf.data
  })
}

export const addCategory = (newCategory) => async (dispatch) => {
  console.log(newCategory)
  const category = await axios.post(`${ApiURL}/categories/add/`, newCategory, { withCredentials: true })
  console.log(category)
  return dispatch({
    type: POST_CATEGORY,
    payload: category.data
  })
}

export const addSubCategory = (newSubCategory) => async (dispatch) => {
  console.log(newSubCategory)
  const subCategory = await axios.post(`${ApiURL}/categories/addSub`, newSubCategory, { withCredentials: true })
  console.log(newSubCategory)
  return dispatch({
    type: POST_SUBCATEGORY,
    payload: subCategory.data
  })
}
