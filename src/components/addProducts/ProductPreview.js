import moment from 'moment'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core'

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
}

const ProductPreview = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 'auto',
            width: 'auto',
            borderRadius: 0
          }}
        />
        <Typography
          color='textPrimary'
          gutterBottom
          variant='h3'
        >
          {user.name}
        </Typography>
        <Typography
          color='textSecondary'
          variant='body1'
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color='textSecondary'
          variant='body1'
        >
          {`${moment().format('hh:mm A')} ${user.timezone}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>

      <Button
        color='primary'
        fullWidth
        variant='text'
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
)

export default ProductPreview
