import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core'
import { validate } from '../../Helpers/formValidate'
import stylex from './AcoountProfileDetails.module.css'
// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   }
// ]

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    name: 'Katarina',
    lastname: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    province: 'Alabama',
    cp: 8000,
    address: '',
    city: '',
    picture: '',
    changed: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    validate(e.target.value, e.target.name, setErrors)
    setValues({
      ...values,
      changed: true,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {

  }, [handleChange])

  // console.log(errors)
  return (
    <form
      autoComplete='off'
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader='Puedes actualizar tu información de perfil'
          title='PERFIL'
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Please specify the first name'
                label='Nombre'
                name='name'
                onChange={handleChange}
                required
                value={values.name}
                variant='outlined'
              />
              {/* ERROR EN NAME */}
              {errors.name && <h3 className={stylex.error}> -{errors.name}- </h3>}

            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Apellido'
                name='lastname'
                onChange={handleChange}
                required
                value={values.lastname}
                variant='outlined'
              />
              {/* ERROR EN LASTNAME */}
              {errors.lastname && <h3 className={stylex.error}> -{errors.lastname}- </h3>}

            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Correo Electrónico'
                name='email'
                onChange={handleChange}
                required
                value={values.email}
                variant='outlined'
              />
              {/* ERROR EN email */}
              {errors.email && <h3 className={stylex.error}> -{errors.email}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Número telefónico'
                name='phone'
                onChange={handleChange}
                type='number'
                value={values.phone}
                variant='outlined'
              />
              {/* ERROR EN PHONE */}
              {errors.phone && <h3 className={stylex.error}> -{errors.phone}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Domicilio'
                name='address'
                onChange={handleChange}
                value={values.address}
                variant='outlined'
              />
              {/* ERROR EN ADDRESS */}
              {errors.address && <h3 className={stylex.error}> -{errors.address}- </h3>}
            </Grid>

            {/* <Grid item md={6} xs={12}>
               <TextField
                fullWidth
                label='Provincia'
                name='province'
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.province}
                variant='outlined'
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              </Grid> */}

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Código Postal'
                name='cp'
                onChange={handleChange}
                type='number'
                value={values.cp}
                variant='outlined'
              />
              {/* ERROR EN CP */}
              {errors.cp && <h3 className={stylex.error}> -{errors.cp}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Provincia'
                name='province'
                onChange={handleChange}
                value={values.province}
                variant='outlined'
              />
              {/* ERROR EN PROVINCE */}
              {errors.province && <h3 className={stylex.error}> -{errors.province}- </h3>}
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Google ID'
                name='googleId'
                onChange={handleChange}
                value={values.googleId}
                variant='outlined'
              />
              {/* ERROR EN GOOGLE ID */}
              {errors.googleId && <h3 className={stylex.error}> -{errors.googleId}- </h3>}
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          {!errors.name && !errors.lastname && !errors.email && !errors.phone && !errors.province && !errors.cp && !errors.address && !errors.city && !errors.picture
            ? (
              <Button
                color='primary'
                variant='contained'

              >
                GUARDAR CAMBIOS
              </Button>
              )
            : (
              <Button
                color='primary'
                variant='contained'
                disabled
              >
                GUARDAR CAMBIOS
              </Button>

              )}
          {/* <Button
            color='primary'
            variant='contained'
          >
            GUARDAR CAMBIOS
          </Button> */}

        </Box>
      </Card>
    </form>
  )
}

export default AccountProfileDetails
