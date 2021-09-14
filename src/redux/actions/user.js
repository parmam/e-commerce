import { GET_USERS } from '../constants'
import axios from 'axios'
import { ApiURL } from 'src/config'

export const getUsers = () => async (dispatch) => {
  const users = await axios.get(`${ApiURL}/admin`, { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}

export const setStatusUser = (id, status) => async (dispatch) => {
  // console.log(id)
  status === true
    ? (
        await axios.delete(`${ApiURL}/admin/${id}`, { withCredentials: true }))
    : (
        await axios.put(`${ApiURL}/admin/${id}`, { withCredentials: true })
      )
  const users = await axios.get(`${ApiURL}/admin`, { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}

export const setUserType = (id, type) => async (dispatch) => {
  // console.log(id)
  type === 'Admin'
    ? (
        await axios.put(`${ApiURL}/admin/changetype/${id}`, { type: 'User' }, { withCredentials: true }))
    : (
        await axios.put(`${ApiURL}/admin/changetype/${id}`, { type: 'Admin' }, { withCredentials: true })
      )
  const users = await axios.get(`${ApiURL}/admin`, { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}
