import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'
import { useEffect, useState } from 'react'
import { removeProducts, getProducts } from '../../redux/actions/products'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductListToolbar = ({eventHandler, setEventHandler, props, allProducts, dispatch}) => {
const [deleter, setDeleter] = useState([])
const onClickDelete = () => {
  setDeleter(eventHandler.selectedProducts) 

}

useEffect(() => {
  console.log(eventHandler.selectedProducts)
  if(deleter.length){
    dispatch(removeProducts(deleter))
    setEventHandler({...eventHandler, selectedProducts:[]})
    setDeleter([])
  }
  dispatch(getProducts())
},[dispatch, deleter])


  return  (
    <Box {...props}>
      <Box
        sx={{ mt: 0 }}
      >
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500, margin: 'auto' }}>
              <TextField
                fullWidth
                style={{
                  marginTop: '8px'
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                    >
                      <SvgIcon
                        fontSize='small'
                        color='action'
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder='Search Product'
                variant='outlined'
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
        style={{
          marginTop: '23px'
        }}
      >
        {/* <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button> */}
        <Button
          onClick={onClickDelete}
          color='warning'
          variant='contained'
          disabled={!eventHandler.deleteProductsBtn}
          style={{
            marginRight: '5px'
          }}
        >
          BORRAR
        </Button>
        <Link to='/app/products/edit'>
        <Button
          color='primary'
          variant='contained'
          style={{
            marginRight: '5px'
          }}
        >
          EDITAR LISTA
        </Button>
        </Link>
        <Link to='/app/products/add'>
          <Button
            color='primary'
            variant='contained'
          >
            AGREGAR PRODUCTOS
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
export default ProductListToolbar
