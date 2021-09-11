import { Helmet } from 'react-helmet'
import {
  Box,
  Container,
  Grid
} from '@material-ui/core'
import AddProducts from '../components/addProducts/AddProducts'
import AddProductsDetails from '../components/addProducts/AddProductsDetails'
 const AddProductsPage = () => (
  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AddProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AddProductsDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)


export default AddProductsPage