import {
  GET_ALL_CATEGORIES,
  GET_ALL_SUBCATEGORIES,
  GET_SUBCATEGORIES_OF,
  POST_CATEGORY,
  POST_SUBCATEGORY
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
      console.log(action.payload)
      return {
        ...state,
        allCategories: action.payload
      }
    case GET_ALL_SUBCATEGORIES:
      console.log(action.payload)
      return {
        ...state,
        allSubCategories: action.payload
      }
    case GET_SUBCATEGORIES_OF:
      console.log(action.payload)
      return {
        ...state,
        subCategoriesOf: action.payload
      }
    case POST_CATEGORY:
      console.log(action.payload)
      return {
        ...state,
        newCategorie: action.payload
      }
    case POST_SUBCATEGORY:
      console.log(action.payload)
      return {
        ...state,
        newSubCategorie: action.payload
      }
    default:
      return state
  }
}

export default categories
