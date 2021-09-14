import React, { useEffect } from 'react'
import { getSubCategoriesOf } from '../../redux/actions/categories'
import { addProducts } from '../../redux/actions/products'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  ImageList,
  ImageListItem
} from '@material-ui/core'

const AddPorductsDetails = ({
  dispatch,
  eventHandler,
  setEventHandler,
  allProducts,
  allSubCategories,
  allCategories,
  subCategoriesOf,
  allBrands,
  productInfo,
  setProductInfo

}) => {
  const handleChange = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (productInfo.category !== '') {
      dispatch(getSubCategoriesOf(productInfo.category))
    }
  }, [dispatch, productInfo.category])

  const submitAddProducts = (e) => {
    e.preventDefault()
    dispatch(addProducts(productInfo))
  }

  return (
    <>

      <form
        autoComplete='off'
        noValidate
        onSubmit={submitAddProducts}
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
                  label='Marca'
                  name='brand'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={productInfo.brand}
                  variant='outlined'
                >
                  {allBrands && allBrands.map((brand) => (
                    <option
                      key={brand.id}
                      value={brand.name}
                    >
                      {brand.name}
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
                  name='model'
                  onChange={handleChange}
                  required
                  value={productInfo.model}
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
                  value={productInfo.category}
                  variant='outlined'
                >
                  {allCategories && allCategories.map((category, index) => (
                    <option
                      key={index}
                      value={category}
                    >
                      {category}
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
                  label='Subcategoria'
                  name='subCategory'
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={productInfo.subCategory}
                  variant='outlined'
                >
                  {subCategoriesOf && subCategoriesOf.map((subCat, index) => (
                    <option
                      key={index}
                      value={subCat}
                    >
                      {subCat}
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
                  value={productInfo.price}
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
                  value={productInfo.discount}
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
                  value={productInfo.description}
                  variant='outlined'

                />
              </Grid>

              <Grid
                item
                md={12}
                xs={12}
              >
                <Box>
                  <ImageList
                    style={{
                      display: 'flex',
                      flexWrap: 'no-wrap',
                      flexDirection: 'row',
                      overflowX: 'scroll'
                    }}
                  >
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                    <ImageListItem>
                      <img style={{ width: '100px', height: '100px' }} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX03Nmgvnh38&psig=AOvVaw3x2YfWgvt9muOTi_SGHcxf&ust=1631740989847000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCKjypoKz__ICFQAAAAAdAAAAABAI' />
                    </ImageListItem>
                  </ImageList>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              p: 2
            }}
          >
            <input
              accept='image/*'
              // className={classes.input}
              style={{ display: 'none' }}
              id='raised-button-file'
              multiple
              type='file'
            />
            <label htmlFor='raised-button-file'>
              <Button variant='contained' color='primary' component='span'>
                Agregar imagen
              </Button>
            </label>
            <Button
              color='primary'
              variant='contained'
              type='submit'
            >
              Guardar producto
            </Button>
          </Box>
        </Card>
      </form>
    </>
  )
}

export default AddPorductsDetails
