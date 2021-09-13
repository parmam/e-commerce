import React, { useEffect, useState } from 'react'
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
import  { DeleteAlertCategory }  from 'src/Tools/Swal2/DeleteAlert'
import { addCategory, addSubCategory, getSubCategoriesOf } from 'src/redux/actions/categories'
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

const AddCategoriesTab = ({dispatch, allProducts, allSubCategories, allCategories, subCategoriesOf}) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  })
  const [newBrand, setNewBrand] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [categoryRemover, setCategoryRemover] = useState('')
  const [categoryOfSubcategory, setCategoryOfSubcategory] = useState('')
  const [newSubCategory, setNewSubcategory] = useState({
    category:'',
    subCategory:''
  })

  useEffect(() => {
    if(categoryRemover !== ''){
      DeleteAlertCategory(categoryRemover, dispatch)
    }
  },[categoryRemover])

  useEffect(() => {
    console.log(categoryOfSubcategory, '  en componente')
    dispatch(getSubCategoriesOf(categoryOfSubcategory))  
  },[categoryOfSubcategory])
  

  const submitCategory = (e) => {
    dispatch(addCategory(newCategory)) 
  }

  const handleChangeCategory = (e) => {
    setNewCategory(e.target.value)
  }


  const handleDeleteCategory = (e) => {
    setCategoryRemover(e.target.value)

  }


  const handleChangeSubCategory = (e) => {
    setNewSubcategory({...newSubCategory, subCategory:e.target.value})
  }

  const handleSetCategoryOfSubCategory = (e) => {
    setCategoryOfSubcategory(e.target.value)

  }

  const submitSubCategory = () => {
    dispatch(addSubCategory(newSubCategory))
  }
 
const submitBrand = () => {
  console.log()
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
                          onChange={(e) => handleChangeCategory(e)}
                          required
                          value={newCategory.value}
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
                          onClick={(e) => submitCategory(e)}
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
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
                    value={categoryRemover.value}
                    onChange={(e) => handleDeleteCategory(e)}
                    select
                    helperText='Haga click sobre la categoria que desea eliminar'
                    SelectProps={{ native: true }}
                    variant='outlined'
                  >
                    {allCategories && allCategories.sort().map((cat, index) => (
                      <option
                        key={index}
                        value={cat}
                      >
                        {cat}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <Grid
                  item
                  md={6}
                  xs={12}
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
                          onChange={(e) => handleChangeSubCategory(e)}
                          required
                          value={newSubCategory.subCategory.value}
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
                          onClick={(e) => submitSubCategory(e)}
                        >
                          +
                        </Button>
                      </Box>
                    </Box>
            
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    value={categoryOfSubcategory.value}
                    select
                    onChange={(e) => handleSetCategoryOfSubCategory(e)}
                    SelectProps={{ native: true }}
                    variant='outlined'
                    label='Categorias'
                    name='allSubCategories'
                    helperText='Seleccione una categoria para asociarla con una sub categoria'
                  >
                    {allCategories && allCategories.sort().map((cat, index) => (
                      <option
                        key={index}
                        value={cat}
                      >
                        {cat}
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
                    {subCategoriesOf && subCategoriesOf
                      .map((subCat, index) => {
                          return (
                            <Button 
                            variant='outlined' 
                            color='primary'
                            style={{ heigth: 5,
                                    fontSize: 12,
                                    marginRight: 1,
                                    margin: 1.5 
                                    }}
                            key={index}
                          >
                            {subCat}
                          </Button>
                     )})}
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
