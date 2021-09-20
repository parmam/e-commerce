import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import { makeStyles } from '@material-ui/styles'
import { useState, useEffect } from 'react'
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: '50vh'
  },
  content: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column'
  }
})

const ProductPreview = ({ 
    product ,
    imageUrl, 
    imgPreview, 
    setImgPreview
}) => {
  const [localUrl, setLocalUrl] = useState('')
  const classes = useStyles()
  

  useEffect(() => {
    if(imageUrl !== ''){
      setLocalUrl(imageUrl[imgPreview])
      console.log(localUrl, ' en preview')
  
    }
    console.log(localUrl, imageUrl,'         este es local url en preview')
  },[imageUrl, imgPreview])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={localUrl}
          title={'product.model'}
        />
        <CardContent className={classes.content}>
          <Typography 
            gutterBottom variant='h4'
            component='h2'>
            {'product.brand'} 
            {'product.model'}
          </Typography>
          <Typography 
            variant='h4'
            component='h2'>
            {'$' + new Intl.NumberFormat('es-ES').format('15555')}
          </Typography>
          <div 
            style={{ color: 'orange' }}>
            {'stars'}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductPreview

