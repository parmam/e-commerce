import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import ProductListResult from '../components/product/ProductListResult'
import ProductListToolbar from '../components/product/ProductListToolbar'
import products from '../__mocks__/products'
const ProductList = () => {
  
  return (

    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <ProductListResult products={products} />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductList
