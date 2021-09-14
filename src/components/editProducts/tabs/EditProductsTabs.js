import React, { useEffect } from 'react'
import {
  Grid,
  Container
} from '@material-ui/core'
import ProductPreview from '../ProductPreview'
import EditProductsDetails from '../EditProductDetails'
import { getProductsDetails } from 'src/redux/actions/products'

const EditProductsTab = ({
  dispatch,
  productDetails,
  allSubCategories,
  allCategories,
  productId
}) => {
  useEffect(() => {
    dispatch(getProductsDetails(productId))
  }, [productId])

  return (
    <>
      <Container maxWidth='lg' style={{ marginTop: 0, marginLeft: 0, marginRight: 0, paddingLeft: 12, paddingRight: 12 }}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <ProductPreview product={productDetails} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <EditProductsDetails
              productDetails={productDetails}
              allSubCategories={allSubCategories}
              allCategories={allCategories}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default EditProductsTab
