import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import ProductListResult from '../components/product/ProductListResult'
import ProductListToolbar from '../components/product/ProductListToolbar'
import products from '../__mocks__/products'
import { FakeContext } from '../FakeContext'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/actions/products'

const ProductList = ({ ...rest }) => {

  const {dispatch, eventHandler, setEventHandler, allProducts} = FakeContext()


  useEffect(() => {
      dispatch(getProducts())
      console.log('asdasd')
  }, [dispatch])


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
            allProducts = {allProducts}
            eventHandler = {eventHandler}
            setEventHandler = {setEventHandler}
            dispatch = {dispatch}
          />
          <Box sx={{ pt: 3 }}>
            <ProductListResult
              eventHandler = {eventHandler}
              setEventHandler = {setEventHandler}
              allProducts = {allProducts}
              dispatch = {dispatch}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProductList
