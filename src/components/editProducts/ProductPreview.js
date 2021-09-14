import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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

const ProductPreview = ({ product }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.model}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h4' component='h2'>
            {product.brand} {product.model}
          </Typography>
          <Typography variant='h4' component='h2'>
            {'$' + new Intl.NumberFormat('es-ES').format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductPreview
