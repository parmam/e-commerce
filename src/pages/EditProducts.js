import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Paper,
  Divider
} from '@material-ui/core'
import { FakeContext } from 'src/FakeContext'
import EditProductsTab from '../components/editProducts/tabs/EditProductsTabs'

const EditProducts = () => {
  const {
    dispatch,
    productDetails,
    allSubCategories,
    allCategories
  } = FakeContext()
  const productId = window.location.pathname.slice(19)

  return (
    <>

      <Helmet>
        <title>Account | Edit Product</title>
      </Helmet>
      <Box>
        <Paper square>
          <Divider />
          <Container maxWidth='lg' style={{ marginTop: 25, padding: 0 }}>
            <EditProductsTab
              dispatch={dispatch}
              productDetails={productDetails}
              allSubCategories={allSubCategories}
              allCategories={allCategories}
              productId={productId}
            />
          </Container>
        </Paper>
      </Box>
    </>
  )
}

export default EditProducts
