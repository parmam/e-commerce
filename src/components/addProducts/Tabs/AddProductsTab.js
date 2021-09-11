
import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Container
} from '@material-ui/core'
import AddProductsDetails from '../AddProductsDetails'
import ProductPreview from '../ProductPreview'

const AddProductsTab = () => {




    return (
        <React.Fragment>
            <Container maxWidth='lg'style={{ marginTop: 0, marginLeft:0, marginRight:0, paddingLeft:12, paddingRight:12}} >
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
                    <ProductPreview/>
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={6}
                    xs={12}
                >
                  <AddProductsDetails/>
                </Grid>

  
            </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AddProductsTab