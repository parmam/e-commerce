import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useSelector } from 'react-redux'

const LatestProducts = () => {
  const products = useSelector(store => store.products.allProducts)
  console.log('todos los productos', products)
  return (

    <Card>
      <CardHeader
        subtitle={`${products.length} in total`}
        title='Latest Products'
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt={product.model}
                src={product.img}
                style={{
                  height: 48,
                  width: 48
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.model}
            />
            <IconButton
              edge='end'
              size='small'
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color='primary'
          endIcon={<ArrowRightIcon />}
          size='small'
          variant='text'
        >
          View all
        </Button>
      </Box>
    </Card>
  )
}
export default LatestProducts
