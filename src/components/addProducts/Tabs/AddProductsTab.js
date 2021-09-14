
import React from 'react'

import {
  Grid,
  Container
} from '@material-ui/core'
import AddProductsDetails from '../AddProductsDetails'
import ProductPreview from '../ProductPreview'

const AddProductsTab = ({
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
  return (
    <>
      <Container
        maxWidth='lg'
        style={{
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: 12,
          paddingRight: 12
        }}
      >
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
            <ProductPreview
              productInfo={productInfo}
            />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AddProductsDetails
              dispatch={dispatch}
              eventHandler={eventHandler}
              setEventHandler={setEventHandler}
              allProducts={allProducts}
              allSubCategories={allSubCategories}
              allCategories={allCategories}
              subCategoriesOf={subCategoriesOf}
              allBrands={allBrands}
              productInfo={productInfo}
              setProductInfo={setProductInfo}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default AddProductsTab
