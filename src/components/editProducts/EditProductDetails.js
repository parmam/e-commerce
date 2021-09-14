import React, { useState } from 'react'

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

const EditProductsDetails = ({
  productDetails,
  allSubCategories,
  allCategories
}) => {
  const [values, setValues] = useState({
    brand: productDetails.brand,
    model: productDetails.model,
    category: '',
    subcategory: productDetails.subcategoryId,
    price: productDetails.price,
    discount: '',
    description: productDetails.description
  })
  console.log(productDetails, 'PRODUCT')
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>

      <form
        autoComplete='off'
        noValidate
      >
        <Card>
          <CardHeader
            subheader='Puede visualizar como va a verse su producto en la seccion de productos en la tarjeta que esta a su izquierda, luego de guardar su producto podra volver a editarlo si asi lo desea.'
            title='Editar producto'
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
                  select
                  value={values.brand}
                >
                  {/* {states.map((option) => (
                    <option
                      key={option.value}
                      value={values.brand}
                    >
                      {values.brand}
                    </option>
                  ))} */}
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label='Modelo'
                  name='model'
                  onChange={handleChange}
                  value={values.model}
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
                  select
                  value={values.category}
                  SelectProps={{ native: true }}
                >
                  {allCategories.map(option => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
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
                  select
                  SelectProps={{ native: true }}
                  value={values.subcategory}
                >
                  {allSubCategories.map(option => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
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
                  value={values.price}
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
                  value={values.email}
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
                  multiline
                  value={values.description}
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
      </form>
    </>
  )
}

export default EditProductsDetails
