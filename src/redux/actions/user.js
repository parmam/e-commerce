import { GET_USERS, SET_LOGGED, LOG_OUT } from '../constants'
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

export const setLogged = (loginInfo) => {
  console.log(loginInfo, 'SETLOGGED')
  return {
    type: SET_LOGGED,
    payload: loginInfo
  }
}

export const logOut = () => {
  axios.get(`${ApiURL}/logout`, { withCredentials: true })
  return {
    type: LOG_OUT
  }
}

export const editUser = (id, data, token) => {
  // console.log(data, 'DATA ACTIONS')
  return async function (dispatch) {
    axios.put(`${ApiURL}/user/${id}`, data, { withCredentials: true })
      .then(editUser => {
        const EditedUser = {
          user: {
            id: editUser.data.id,
            name: editUser.data.name,
            lastName: editUser.data.lastName,
            email: editUser.data.email,
            password: editUser.data.password,
            cp: editUser.data.cp,
            address: editUser.data.address,
            city: editUser.data.city,
            province: editUser.data.province,
            phone: editUser.data.phone,
            type: data.type
          },
          token
        }

        if (editUser.status === 200) {
          return dispatch({
            type: SET_LOGGED,
            payload: EditedUser
          })
        }
      })
      .catch(e => window.alert('Usuario No Modificado'))
  }
}
