import { Button } from '@material-ui/core'
import { ButtonAdmin, ButtonDesactivar, ButtonActivar } from './ButtonsColors'
import { useDispatch } from 'react-redux'
import { setStatusUser, setUserType } from '../redux/actions/user'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toastCustom } from '../Tools/Toastify'

const GroupButtons = ({ id, type, status }) => {
  const dispatch = useDispatch()
  console.log(type)
  const [userStatus, setUserStatus] = useState(status)
  const [userType, setUserTypes] = useState(type)

  useEffect(() => {
  }, [userType, userStatus])

  const handleStatus = () => {
    dispatch(setStatusUser(id, userStatus))

    if (userStatus === false) {
      setUserStatus(true)
      toastCustom('El usuario ha sido activado', 'success', 3000, 'top-right')
    } else {
      setUserStatus(false)
      toastCustom('El usuario ha sido desactivado', 'error', 3000, 'top-right')
    }
  }

  const handleReset = async () => {
    await axios.put(`http://localhost:3002/admin/resetpassword/${id}`, { withCredentials: true })
    toastCustom('La contraseña ha si restablecida', 'success', 3000, 'top-right')
  }

  const handleAdmin = async () => {
    console.log(type)
    dispatch(setUserType(id, userType))
    if (userType === 'User') {
      setUserTypes('Admin')
      toastCustom('El usuario ahora es Admin', 'warning', 3000, 'top-right')
    } else {
      setUserTypes('User')
      toastCustom('El admin ahora es Usuario', 'success', 3000, 'top-right')
    }
    // userType === 'User' ? (setUserTypes('Admin')) : (setUserTypes('User'))
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
