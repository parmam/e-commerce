import axios from 'axios'
import {
  GET_ALL_BRANDS,
  GET_BRAND_BY_NAME,
  POST_BRAND
} from '../constants'
import { ApiURL } from 'src/config'

export const addNewBrand = (newBrand) => async (dispatch) => {
  console.log(newBrand)
  const response = await axios.post(`${ApiURL}/brands`, { name: newBrand }, { withCredentials: true })
  if (response.request.status === 200) {
    const brands = await axios.get(`${ApiURL}/brands`, { withCredentials: true })
    return dispatch({
      type: POST_BRAND,
      payload: brands.data
    })
  }
}

export const getAllBrands = () => async (dispatch) => {
  const response = await axios.get(`${ApiURL}/brands`, { withCredentials: true })
  return dispatch({
    type: GET_ALL_BRANDS,
    payload: response.data
  })
}
