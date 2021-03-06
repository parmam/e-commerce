import { Card, CardContent, CardHeader, Divider, TextField, Grid, Box, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useState } from 'react'

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

export const EditProduct = () => {
  const allCategories = useSelector(state => state.categories.allCategories)

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: ''
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
                label='Marca'
                name='brand'
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText=''
                label='Modelo'
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
                label='Categoria'
                name='category'
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label='Sub categoria'
                name='subcategory'
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label='Precio'
                name='price'
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
                label='Descuento'
                name='discount'
                onChange={handleChange}
                required
                value={values.email}
                variant='outlined'
              />
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label='Descripcion del producto'
                name='description'
                onChange={handleChange}
                required
                multiline
                value={values.country}
                variant='outlined'
              />
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
    </>
  )
}
