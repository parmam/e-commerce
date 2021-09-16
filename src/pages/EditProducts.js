import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Paper,
  Divider,
  Button
} from '@material-ui/core'
import { FakeContext } from 'src/FakeContext'
import EditProductsTab from '../components/editProducts/tabs/EditProductsTabs'

const EditProducts = () => {
  const {
    dispatch,
    productDetails,
    allSubCategories,
    allCategories,
    allBrands,
    productInfo,
    setProductInfo
  } = FakeContext()
  const productId = window.location.pathname.slice(19)

  return (
    <>

      <Helmet>
        <title>Account | Edit Product</title>
      </Helmet>
      <Box>
        <Paper square>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 30px' }}>
            <Button
              variant='contained'
              href='/app/products'
            > VER TODOS
            </Button>
          </div>
          <Divider />
          <Container maxWidth='lg' style={{ marginTop: 25, padding: 0 }}>
            <EditProductsTab
              dispatch={dispatch}
              productDetails={productDetails}
              allSubCategories={allSubCategories}
              allCategories={allCategories}
              productId={productId}
              allBrands={allBrands}
              productInfo={productInfo}
              setProductInfo={setProductInfo}
            />
          </Container>
        </Paper>
      </Box>
    </>
  )
}

export default EditProducts
