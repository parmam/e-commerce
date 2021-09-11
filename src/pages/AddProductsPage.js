import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Divider
} from '@material-ui/core'
import React, { useState } from 'react'

import AddCategoriesTab from '../components/addProducts/Tabs/AddCategoriesTab'
import AddProductsTab from '../components/addProducts/Tabs/AddProductsTab'

 const AddProductsPage = () => {
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
          indicatorColor="primary"
          textColor="primary"
          onChange={handleView}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Productos" />
          <Tab label="Categorias, subcategorias y marcas"/>
        </Tabs>
        <Divider />
        <Container maxWidth='lg' style={{ marginTop: 25, padding:0}}>
          
        {selectedTab === 0 && <AddProductsTab/>}
        {selectedTab === 1 && <AddCategoriesTab/>}
        </Container>
      </Paper>
    </Box>
  </>
)}


export default AddProductsPage