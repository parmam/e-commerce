import { Button } from '@material-ui/core'
import { ButtonAdmin, ButtonDesactivar, ButtonActivar } from './ButtonsColors'
import { useDispatch } from 'react-redux'
import { setStatusUser, setUserType } from '../redux/actions/user'
import axios from 'axios'
import { useEffect, useState } from 'react'

const GroupButtons = ({ id, type, status }) => {
  const dispatch = useDispatch()
  console.log(type)
  const [userStatus, setUserStatus] = useState(status)
  const [userType, setUserTypes] = useState(type)
  useEffect(() => {

  }, [userType, userStatus])

  const handleStatus = () => {
    dispatch(setStatusUser(id, userStatus))
    userStatus === false ? (setUserStatus(true)) : (setUserStatus(false))
  }

  const handleReset = async () => {
    await axios.put(`http://localhost:3002/admin/resetpassword/${id}`, { withCredentials: true })
  }

  const handleAdmin = async () => {
    console.log(type)
    dispatch(setUserType(id, userType))
    userType === 'User' ? (setUserTypes('Admin')) : (setUserTypes('User'))
  }

  return (
    <>
      {userType === 'User'
        ? (
          <ButtonAdmin variant='contained' color='primary' onClick={handleAdmin}>
            Admin
          </ButtonAdmin>
          )
        : (
          <ButtonAdmin variant='contained' color='primary' onClick={handleAdmin}>
            User
          </ButtonAdmin>
          )}

      {userStatus === true
        ? (
          <ButtonDesactivar variant='contained' color='secondary' onClick={handleStatus}>
            Desactivar
          </ButtonDesactivar>
          )
        : (
          <ButtonActivar onClick={handleStatus}>
            Activar
          </ButtonActivar>
          )}

      <Button variant='contained' color='primary' onClick={handleReset}>
        Password
      </Button>
    </>
  )
}

export default GroupButtons
