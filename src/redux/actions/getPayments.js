import axios from 'axios'
import { ApiURL } from '../../config'
import { GET_PAYMENTS, GET_PAYMENT_ID } from '../constants'

export const getAllPayments = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ApiURL}/api/v1/mercadopago`)
      // Llamar al carrito con el id que llegará por description
      return dispatch({
        type: GET_PAYMENTS,
        payload: response.data.results
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getPaymentById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ApiURL}/api/v1/mercadopago?id=${id}`)
      return dispatch({
        type: GET_PAYMENT_ID,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
