import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import ProductListResult from '../components/product/ProductListResult'
import ProductListToolbar from '../components/product/ProductListToolbar'
import products from '../__mocks__/products'
import { FakeContext } from '../FakeContext'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const ProductList = ({...rest}) => {
  const allProducts = useSelector(store => store.products.allProducts)
  const { eventHandler, setEventHandler } = FakeContext()
  useEffect(() => {
    console.log(eventHandler)
  },[eventHandler])
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
          <ProductListToolbar 
            products={products} 
            eventHandler={eventHandler} 
            setEventHandler={setEventHandler} 
            allProducts={allProducts}
          />
          <Box sx={{ pt: 3 }}>
            <ProductListResult 
              eventHandler={eventHandler} 
              setEventHandler={setEventHandler} 
              allProducts={allProducts}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductList
