import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core'
// import FacebookIcon from '../icons/Facebook'
import GoogleIcon from '../icons/Google'
import { ApiURL } from 'src/config'
import { setLogged } from 'src/redux/actions/user'
import { toastCustom } from 'src/Tools/Toastify'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user.logged.user)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: true,
    password: true
  })

  useEffect(() => {
    if (user && (user.type === 'Admin' || user.type === 'Super')) {
      navigate('/app/dashboard', { replace: true })
    }
  }, [])
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${ApiURL}/login`, formData)
      dispatch(setLogged(response.data))
      toastCustom(`Bienvenidx nuevamente ${response.data.user.name}!`, 'success', 4000, 'bottom-right')
      navigate('/app/dashboard', { replace: true })
    } catch (error) {
      toastCustom('Datos incorrectos, intentalo nuevamente!', 'warning', 4000, 'bottom-right')
    }
  }

  const handleChange = (e) => {
    setErrors(prev => ({ ...prev, [e.target.name]: null }))
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (e.target.name === 'email') {
      if (!e.target.value) setErrors(prev => ({ ...prev, [e.target.name]: 'Ingresa tu dirección de correo electrónico' }))
      if (!e.target.value.match(emailFormat)) setErrors(prev => ({ ...prev, [e.target.name]: 'Ingresa un e-mail válido' }))
    }

    if (e.target.name === 'password') {
      if (!e.target.value) setErrors(prev => ({ ...prev, [e.target.name]: 'Ingresa tu contraseña' }))
      if (e.target.value.length < 5) setErrors(prev => ({ ...prev, [e.target.name]: 'Ingresa tu contraseña' }))
    }

    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth='sm'>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
          >
            {({
              handleBlur,
              touched
            }) => (
              <form onSubmit={onSubmit}>

                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align='center'
                    color='textSecondary'
                    variant='body1'
                    style={{
                      fontSize: 35,
                      color: 'black'
                    }}
                  >
                    Inicio de sesion
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  helperText={touched.email && errors.email}
                  label='Email Address'
                  margin='normal'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='email'
                  value={formData.email}
                  variant='outlined'
                />
                <TextField
                  fullWidth
                  helperText={touched.password && errors.password}
                  label='Password'
                  margin='normal'
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='password'
                  value={formData.password}
                  variant='outlined'
                />
                <Box sx={{ py: 2 }}>
                  {!errors.email && !errors.password
                    ? (
                      <Button
                        color='primary'
                        fullWidth
                        size='large'
                        type='submit'
                        variant='contained'
                      >
                        Sign in now
                      </Button>
                      )
                    : (
                      <Button
                        color='primary'
                        fullWidth
                        size='large'
                        type='submit'
                        variant='contained'
                        disabled
                      >
                        Sign in now
                      </Button>
                      )}
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  )
}

export default Login
