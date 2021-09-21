import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import { useSelector } from 'react-redux'

const TotalCustomers = () => {
  const allUsers = useSelector(state => state.user.users)
  const totalUsers = allUsers.length
  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color='textSecondary'
              gutterBottom
              variant='h6'
            >
              TOTAL CUSTOMERS
            </Typography>
            <Typography
              color='textPrimary'
              variant='h3'
            >
              {totalUsers}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        />
      </CardContent>
    </Card>
  )
}

export default TotalCustomers
