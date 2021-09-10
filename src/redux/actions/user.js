import { GET_USERS } from '../constants'
import axios from 'axios'

export const getUsers = () => async (dispatch) => {
  const users = await axios.get('http://localhost:3002/admin', { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}

export const setStatusUser = (id, status) => async (dispatch) => {
  // console.log(id)
  status === true
    ? (
        await axios.delete(`http://localhost:3002/admin/${id}`, { withCredentials: true }))
    : (
        await axios.put(`http://localhost:3002/admin/${id}`, { withCredentials: true })
      )
  const users = await axios.get('http://localhost:3002/admin', { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}

export const setUserType = (id, type) => async (dispatch) => {
  // console.log(id)
  type === 'Admin'
    ? (
        await axios.put(`http://localhost:3002/admin/changetype/${id}`, { type: 'User' }, { withCredentials: true }))
    : (
        await axios.put(`http://localhost:3002/admin/changetype/${id}`, { type: 'Admin' }, { withCredentials: true })
      )
  const users = await axios.get('http://localhost:3002/admin', { withCredentials: true })
  return dispatch({
    type: GET_USERS,
    payload: users.data
  })
}
