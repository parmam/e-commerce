import React, { useState } from 'react'
import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  Container

} from '@material-ui/core'

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
]
const AddCategoriesTab = () => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <Container maxWidth='lg' style={{ marginLeft: 12, marginTop: 49, paddingLeft: 24, paddingRight: 24 }}>
        <Grid
          container
          spacing={3}
        >
          <Card>
            <CardHeader
              subheader='En primer lugar debera ingresar las marcas de los productos que tendra en su tienda, luego las categorias y subcategorias relacionadas a las mismas'
              title='Agregar marcas, categorias y sub categorias'
            />
            <CardContent>
              <Grid
                container
                spacing={5}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <form
                    autoComplete='off'
                    noValidate
                  >
                    <Box
                      display='flex'
                      flexDirection='colums'
                      width={1}
                      justifyContent='space-between'
                    >
                      <Box
                        width='85%'
                      >
                        <TextField
                          fullWidth
                          helperText=''
                          label='Categoria'
                          name='category'
                          onChange={handleChange}
                          required
                          value={values.firstName}
                          variant='outlined'
                        />
                      </Box>
                      <Box
                        display='flex'
                        alignSelf='center'
                      >
                        <Button
                          color='primary'
                          variant='contained'
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label='Categorias registradas'
                    name='allCategories'
                    onChange={handleChange}
                    select
                    helperText='Haga click sobre la categoria que desea eliminar'
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant='outlined'
                  >
                    {states.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <form
                    autoComplete='off'
                    noValidate
                  >
                    <Box
                      heigth='100%'
                      display='flex'
                      flexDirection='colums'
                      width={1}
                      justifyContent='space-between'
                    >
                      <Box
                        width='85%'
                      >
                        <TextField
                          fullWidth primary
                          label='Nombre de la sub categoria'
                          name='subCategory'
                          onChange={handleChange}
                          required
                          value={values.firstName}
                          variant='outlined'
                        />
                      </Box>
                      <Box
                        display='flex'
                        alignSelf='center'
                      >
                        <Button
                          color='primary'
                          variant='contained'
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label='Categorias'
                    name='allSubCategories'
                    onChange={handleChange}
                    select
                    helperText='Seleccione una categoria para asociarla con una sub categoria'
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant='outlined'
                  >
                    {states.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography
                    color='textSecondary'
                    variant='body1'
                    style={{ fontSize: 14 }}
                  >
                    A su derecha tiene las sub categorias asignadas a la categoria seleccionada, en caso de querer eliminar alguna de ellas solo debe presionar
                    el boton correspondiente a la sub categoria, tenga en cuenta que esta se desvinculara de todos los productos a la cual esta asignada.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Box>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Primaryasdasdsa
                    </Button>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Primary
                    </Button>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Primary
                    </Button>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Pri
                    </Button>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Psdasddrimary
                    </Button>
                    <Button variant='outlined' color='primary' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                      - Primary
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <form
                    autoComplete='off'
                    noValidate
                  >
                    <Box
                      display='flex'
                      flexDirection='colums'
                      width={1}
                      justifyContent='space-between'
                    >
                      <Box
                        width='85%'
                      >
                        <TextField
                          fullWidth
                          helperText=''
                          label='Marcas'
                          name='brand'
                          onChange={handleChange}
                          required
                          value={values.firstName}
                          variant='outlined'
                        />
                      </Box>
                      <Box
                        display='flex'
                        alignSelf='center'
                      >
                        <Button
                          color='primary'
                          variant='contained'
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label='Marcas registradas'
                    name='allBrands'
                    onChange={handleChange}
                    select
                    helperText='Haga click sobre la marca que desea eliminar'
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant='outlined'
                  >
                    {states.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Container>
    </>
  )
}

export default AddCategoriesTab
