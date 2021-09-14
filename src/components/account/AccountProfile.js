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
import { useSelector, useDispatch } from 'react-redux'

const AccountProfile = (props) => {
  const user = useSelector(store => store.user.logged.user)

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.picture}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color='textPrimary'
            gutterBottom
            variant='h3'
          >
            {user.name + ' ' + user.lastName}
          </Typography>
          <Typography
            color='textSecondary'
            variant='body1'
          >
            {/* {`${user.city} ${user.country}`} */}
          </Typography>
          <Typography
            color='textSecondary'
            variant='body1'
          >
            {`${moment().format('hh:mm A')}`}
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
}

export default AccountProfile
