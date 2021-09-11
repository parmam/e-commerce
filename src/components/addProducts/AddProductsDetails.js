import React, { useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import { PrecisionManufacturingRounded } from '@material-ui/icons'

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
]

const AccountProductsDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>

      <Card>
        <CardHeader
          subheader='En primer lugar debera ingresar las marcas de los productos que tendra en su tienda, luego las categorias y subcategorias relacionadas a las mismas'
          title='Agregar marcas, categorias y sub categorias'
        />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText=''
                label='Categoria'
                name='category'
                onChange={handleChange}
                required
                value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label='Categorias registradas'
                name='allCategories'
                onChange={handleChange}
                select
                helperText='Haga click sobre la categoria que desea eliminar'
                SelectProps={{ native: true }}
                value={values.state}
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
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label='Categorias'
                name='allSubCategories'
                onChange={handleChange}
                select
                helperText='Seleccione una categoria para asociarla con una sub categoria'
                SelectProps={{ native: true }}
                value={values.state}
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
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText='Ingrese el nombre de la sub categoria'
                label='Nombre'
                name='subCategory'
                onChange={handleChange}
                required
                value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Box>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Primaryasdasdsa
                </Button>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Primary
                </Button>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Primary
                </Button>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Pri
                </Button>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Psdasddrimary
                </Button>
                <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                  - Primary
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography
                color='textSecondary'
                variant='body1'
                style={{ fontSize: 14 }}
              >
                A su izquierda tiene las sub categorias asignadas a la categoria seleccionada, en caso de querer eliminar alguna de ellas solo debe presionar
                el boton correspondiente a la sub categoria, tenga en cuenta que esta se desvinculara de todos los productos a la cual esta asignada.
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText=''
                label='Marcas'
                name='brand'
                onChange={handleChange}
                required
                value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label='Marcas registradas'
                name='allBrands'
                onChange={handleChange}
                select
                helperText='Haga click sobre la marca que desea eliminar'
                SelectProps={{ native: true }}
                value={values.state}
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
            </Grid>

          </Grid>
        </CardContent>
      </Card>
      <Divider />

      <form
        autoComplete='off'
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader='Puede visualizar como va a verse su producto en la seccion de productos en la tarjeta que esta a su izquierda, luego de guardar su producto podra volver a editarlo si asi lo desea.'
            title='Agregar nuevo producto'
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText=''
                  label='First name'
                  name='firstName'
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Last name'
                  name='lastName'
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Email Address'
                  name='email'
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Phone Number'
                  name='phone'
                  onChange={handleChange}
                  type='number'
                  value={values.phone}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Country'
                  name='country'
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant='outlined'
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Select State'
                  name='state'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
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
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color='primary'
              variant='contained'
            >
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </>
  )
}

export default AccountProductsDetails
