import {
  GET_ALL_CATEGORIES,
  GET_ALL_SUBCATEGORIES,
  GET_SUBCATEGORIES_OF,
  POST_CATEGORY,
  POST_SUBCATEGORY,
  DELETE_CATEGORY
} from '../constants'

const initialState = {
  allCategories: [],
  allSubCategories: [],
  subCategoriesOf: [],
  newCategorie: '',
  newSubCategorie: {}
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload
      }
    case GET_ALL_SUBCATEGORIES:
      return {
        ...state,
        allSubCategories: action.payload
      }
    case GET_SUBCATEGORIES_OF:
      return {
        ...state,
        subCategoriesOf: action.payload
      }
    case POST_CATEGORY:
      return {
        ...state,
        allCategories: action.payload
      }
    case POST_SUBCATEGORY:
      return {
        ...state,
        subCategoriesOf: action.payload
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        allCategories: action.payload
      }

    default:
      return state
  }
}

export default categories
