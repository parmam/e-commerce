import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Paper,
  Tabs,
  Tab,
  Divider
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'

import AddCategoriesTab from '../components/addProducts/Tabs/AddCategoriesTab'
import AddProductsTab from '../components/addProducts/Tabs/AddProductsTab'
import { FakeContext } from '../FakeContext'
const AddProductsPage = () => {
  const {
    dispatch,
    eventHandler,
    setEventHandler,
    allProducts,
    allSubCategories,
    allCategories,
    subCategoriesOf,
    allBrands,
    productInfo,
    setProductInfo,
    selectedFiles,
    setSelectedFiles,
    imageUrl,
    setImageUrl
  } = FakeContext()

  useEffect(() => {
    console.log(imageUrl, 'imageUrl en addProductsPage')
  },[imageUrl])
  const [selectedTab, setSelectedTab] = useState(0)
  const handleView = (event, newValue) => {
    setSelectedTab(newValue)
  }
  return (

    <>

      <Helmet>
        <title>Account | Material Kit</title>
      </Helmet>
      <Box>
        <Paper square>
          <Tabs
            value={selectedTab}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleView}
            aria-label='disabled tabs example'
            centered
          >
            <Tab label='Productos' />
            <Tab label='Categorias, subcategorias y marcas' />
          </Tabs>
          <Divider />
          <Container maxWidth='lg' style={{ marginTop: 25, padding: 0 }}>

            {selectedTab === 0 && <AddProductsTab
              dispatch={dispatch}
              allCategories={allCategories}
              allSubCategories={allSubCategories}
              allProducts={allProducts}
              allBrands={allBrands}
              subCategoriesOf={subCategoriesOf}
              productInfo={productInfo}
              setProductInfo={setProductInfo}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
                                  />}
            {selectedTab === 1 && <AddCategoriesTab
              dispatch={dispatch}
              allCategories={allCategories}
              allSubCategories={allSubCategories}
              allProducts={allProducts}
              subCategoriesOf={subCategoriesOf}
              allBrands={allBrands}
                                  />}
          </Container>
        </Paper>
      </Box>
    </>
  )
}

export default AddProductsPage
