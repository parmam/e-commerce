import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  CircularProgress
} from '@material-ui/core'
import { getSubCategoriesOf } from 'src/redux/actions/categories'
import { editProducts } from 'src/redux/actions/products'

const EditProductsDetails = ({
  productDetails,
  allCategories,
  dispatch,
  productInfo,
  setProductInfo
}) => {
  const [subCategories, setSubCategories] = useState({})
  const ranking = [1, 2, 3, 4, 5]

  useEffect(async () => {
    setProductInfo(productDetails)
    setSubCategories(await dispatch(getSubCategoriesOf(productDetails.category)))
  }, [productDetails])

  const handleChange = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value
    })
    // setSubCategories(dispatch(getSubCategoriesOf(productDetails.category)))
  }

  return (
    <>
      {
      !productInfo.subCategory || !subCategories.payload
        ? <CircularProgress />
        : (
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
                      value=''
                    >
                      {/* {subCategories.payload.map((option) => ( */}
                      <option
                          // key={option}
                        value='MARCAS'
                      >
                        MARCAS
                      </option>
                      {/* ))} */}
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
                      value={productInfo.model}
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
                      value={productInfo.category}
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
                      name='subCategory'
                      onChange={handleChange}
                      select
                      value={productInfo.subCategory}
                      SelectProps={{ native: true }}
                    >
                      {subCategories.payload.map(option => (
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
                      value={productInfo.price}
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
                      value={productInfo.discount}
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
                      value={productInfo.description}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  p: 2
                }}
              >
                <Grid
                  item
                  md={3}
                  xs={3}
                >
                  <TextField
                    fullWidth
                    label='Puntos'
                    name='points'
                    onChange={handleChange}
                    select
                    value={productInfo.points}
                    SelectProps={{ native: true }}
                  >
                    {ranking.map(option => (
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
                  md={5}
                  xs={3}
                />
                <Button
                  color='primary'
                  variant='contained'
                  onClick={() => dispatch(editProducts(productInfo))}
                >
                  Save details
                </Button>
              </Box>
            </Card>
          </form>
          )
    }
    </>

  )
}

export default EditProductsDetails
