import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Paper,
  Tabs,
  Tab,
  Divider
} from '@material-ui/core'
import React, { useState } from 'react'

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
    subCategoriesOf} = FakeContext()
  
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

            
            {selectedTab === 0 && <AddProductsTab dispatch={dispatch}
                                                  allCategories={allCategories}
                                                  allSubCategories={allSubCategories}
                                                  allProducts={allProducts}
                                                  subCategoriesOf={subCategoriesOf}/>}
            {selectedTab === 1 && <AddCategoriesTab dispatch={dispatch}
                                                    allCategories={allCategories}
                                                    allSubCategories={allSubCategories}
                                                    allProducts={allProducts}
                                                    subCategoriesOf={subCategoriesOf}/>}
          </Container>
        </Paper>
      </Box>
    </>
  )
}

export default AddProductsPage
