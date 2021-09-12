import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import CustomerListResults from '../components/customer/CustomerListResults'
import CustomerListToolbar from '../components/customer/CustomerListToolbar'
import GroupButtons from '../Resources/GroupButtons'
import customers from '../__mocks__/customers'

const AdminList = () => (

  <>
    <Helmet>
      <title>Admins | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults userType='User' />
        </Box>
      </Container>
    </Box>
  </>
)

export default AdminList
