import moment from 'moment'
import React, { useEffect, useState } from 'react'
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



const ProductPreview = ({imageUrl}) => {
  const [localUrl, setLocalUrl] = useState('')


  useEffect(() => {
    if(imageUrl !== ''){
      setLocalUrl(imageUrl)
 
    }
   console.log(localUrl, imageUrl,'         este es local url en preview')
  },[imageUrl])
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
              {(localUrl !== '')
                ? (<img style={{ width: '400px', height: '500px' }} src={localUrl}/>)
                : (<img style={{ width: '400px', height: '500px' }} src={imageUrl}/> )
              }
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
    </React.Fragment>
  )
}
export default ProductPreview
