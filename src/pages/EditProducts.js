import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import ProductListResult from '../components/product/ProductListResult'
import ProductListToolbar from '../components/product/ProductListToolbar'

 

const AddProducts = ({...rest}) => {

    return (     
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>

          <Box sx={{ pt: 3 }}>
                soy edit products
          </Box>
        </Container>
      </Box>
    </React.Fragment>
    )
    
}

export default AddProducts