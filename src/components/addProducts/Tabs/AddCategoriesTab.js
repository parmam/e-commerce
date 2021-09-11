import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
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
        <React.Fragment>
            <Container maxWidth='lg' style={{marginLeft:12, marginTop: 49, paddingLeft:24, paddingRight:24}}>
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
                        <TextField
                            fullWidth
                            helperText='Ingrese el nombre de la sub categoria'
                            label='Nombre'
                            name='subCategory'
                            onChange={handleChange}
                            required
                            value={values.firstName}
                            variant='outlined'
                        />
                        </Grid>
                        <Grid
                        item
                        md={6}
                        xs={12}
                        >
                        <Box>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Primaryasdasdsa
                            </Button>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Primary
                            </Button>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Primary
                            </Button>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Pri
                            </Button>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Psdasddrimary
                            </Button>
                            <Button variant='outlined' color='warning' style={{ heigth: 5, fontSize: 12, marginRight: 1, margin: 1.5 }}>
                            - Primary
                            </Button>
                        </Box>
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
                            A su izquierda tiene las sub categorias asignadas a la categoria seleccionada, en caso de querer eliminar alguna de ellas solo debe presionar
                            el boton correspondiente a la sub categoria, tenga en cuenta que esta se desvinculara de todos los productos a la cual esta asignada.
                        </Typography>
                        </Grid>
                        <Grid
                        item
                        md={6}
                        xs={12}
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
        </React.Fragment>
        )
    
}

export default AddCategoriesTab




