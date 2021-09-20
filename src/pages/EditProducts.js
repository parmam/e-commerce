import React, { useEffect } from 'react'
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
import { deleteDetails, getProductsDetails } from 'src/redux/actions/products'

const EditProducts = () => {
  const {
    dispatch,
    productDetails,
    allSubCategories,
    allCategories,
    allBrands,
    productInfo,
    setProductInfo,
    subCategoriesOf
  } = FakeContext()

  const productId = window.location.pathname.slice(19)

  useEffect(() => {
    dispatch(deleteDetails())
    dispatch(getProductsDetails(productId))
  }, [])

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
              allBrands={allBrands}
              productInfo={productInfo}
              setProductInfo={setProductInfo}
              subCategoriesOf={subCategoriesOf}
            />
          </Container>
        </Paper>
      </Box>
    </>
  )
}

export default EditProducts
