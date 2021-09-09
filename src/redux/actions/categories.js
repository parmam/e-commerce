import axios from 'axios'
import {
  GET_ALL_CATEGORIES,
  GET_ALL_SUBCATEGORIES,
  GET_SUBCATEGORIES_OF,
  POST_SUBCATEGORY,
  POST_CATEGORY
} from '../constants'

export const getCategories = () => async (dispatch) => {
  const categories = await axios.get('http://localhost:3001/categories', { withCredentials: true })
  return dispatch({
    type: GET_ALL_CATEGORIES,
    payload: categories.data
  })
}

export const getSubCategories = () => async (dispatch) => {
  const subCategories = await axios.get('http://localhost:3001/categories/getSub/All', { withCredentials: true })
  return dispatch({
    type: GET_ALL_SUBCATEGORIES,
    payload: subCategories.data
  })
}

export const getSubCategoriesOf = (categorie) => async (dispatch) => {
  const subCategoriesOf = await axios.get(`http://localhost:3001/categories/getSub/${categorie}`, { withCredentials: true })
  return dispatch({
    type: GET_SUBCATEGORIES_OF,
    payload: subCategoriesOf.data
  })
}

export const addCategory = (newCategory) => async (dispatch) => {
  console.log(newCategory)
  const category = await axios.post('http://localhost:3001/categories/add/', newCategory, { withCredentials: true })
  console.log(category)
  return dispatch({
    type: POST_CATEGORY,
    payload: category.data
  })
}

export const addSubCategory = (newSubCategory) => async (dispatch) => {
  console.log(newSubCategory)
  const subCategory = await axios.post('http://localhost:3001/categories/addSub', newSubCategory, { withCredentials: true })
  console.log(newSubCategory)
  return dispatch({
    type: POST_SUBCATEGORY,
    payload: subCategory.data
  })
}

/*

POST  >> crea una nueva categoría (espera un name, por body)
POST /categories/addSub >> crea una nueva subCategoría (espera category y subCategory por body)

*/
