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

const ProductListToolbar = (props) => (
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
        color='warning'
        variant='contained'
        style={{
          marginRight: '5px'
        }}
      >
        BORRAR
      </Button>
      <Button
        color='primary'
        variant='contained'
        style={{
          marginRight: '5px'
        }}
      >
        EDITAR LISTA
      </Button>
      <Button
        color='primary'
        variant='contained'
      >
        AGREGAR PRODUCTOS
      </Button>
    </Box>
  </Box>
)

export default ProductListToolbar
