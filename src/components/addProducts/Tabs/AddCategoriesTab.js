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
import { DeleteAlertCategory } from 'src/Tools/Swal2/DeleteAlert'
import { addCategory, addSubCategory, getSubCategoriesOf } from 'src/redux/actions/categories'
import { addNewBrand } from 'src/redux/actions/brands'

const AddCategoriesTab = (
  {
    dispatch,
    allProducts,
    allSubCategories,
    allCategories,
    subCategoriesOf,
    allBrands
  }) => {
  const [flag, setFlag] = useState(0)
  const [newBrand, setNewBrand] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [categoryRemover, setCategoryRemover] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [subCategoryName, setSubCategoryName] = useState('')
  const [key, setKey] = useState(0)
  const [newSubCategory, setNewSubCategory] = useState({
    category: '',
    subCategory: ''
  })

  useEffect(() => {
    if (categoryRemover !== '') {
      DeleteAlertCategory(categoryRemover, dispatch)
    }
  }, [categoryRemover])

  useEffect(() => {
    if (selectedCategory !== '') {
      dispatch(getSubCategoriesOf(selectedCategory))
    }
  }, [selectedCategory, dispatch])

  useEffect(() => {
    if (flag === 1) {
      setNewSubCategory({
        ...newSubCategory,
        category: selectedCategory,
        subCategory: subCategoryName
      })
      setFlag(2)
    }
    if (flag === 2) {
      if (selectedCategory && newSubCategory !== '') {
        dispatch(addSubCategory(newSubCategory))
        setFlag(0)
      }
      setFlag(0)
    }
    if (flag === 3) {
      dispatch(addNewBrand(newBrand))
      setFlag(0)
    }
  }, [flag])

  const submitCategory = () => {
    if (newCategory !== '') {
      dispatch(addCategory(newCategory))
    }
    setKey(key + 1)
  }

  const handleChangeCategory = (e) => {
    setNewCategory(e.target.value)
  }

  const handleDeleteCategory = (e) => {
    setCategoryRemover(e.target.value)
  }

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const submitAddSubCategory = () => {
    if (selectedCategory) {
      setFlag(1)
      setKey(key + 1)
    }
  }

  const handleSubCategoryName = (e) => {
    setSubCategoryName(e.target.value)
  }

  const handleChangeBrand = (e) => {
    setNewBrand(e.target.value)
  }

  const submitBrand = () => {
    if (newBrand !== '') {
      setFlag(3)
      setKey(key + 1)
    }
  }

  return (
    <>
      <Container
        maxWidth='lg'
        style={{
          marginLeft: 12,
          marginTop: 49,
          paddingLeft: 24,
          paddingRight: 24
        }}
      >
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
                        key={key}
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
                        onChange={(e) => handleSubCategoryName(e)}
                        required
                        value={subCategoryName.value}
                        variant='outlined'
                        key={key}
                      />
                    </Box>
                    <Box
                      display='flex'
                      alignSelf='center'
                    >
                      <Button
                        color='primary'
                        variant='contained'
                        onClick={(e) => submitAddSubCategory(e)}
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
                    label='Categorias asociada a la subcategoria'
                    name='selectedSubcategory'
                    value={selectedCategory.value}
                    onChange={(e) => handleSelectedCategory(e)}
                    select
                    helperText='Seleccione una para luego asignar la subcategoria'
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
                    {(subCategoriesOf && subCategoriesOf)
                      ? ((subCategoriesOf && subCategoriesOf.map((subCat, index) => {
                          return (
                            <Button
                              variant='outlined'
                              color='primary'
                              style={{
                                heigth: 5,
                                fontSize: 12,
                                marginRight: 1,
                                margin: 1.5
                              }}
                              key={index}
                            >
                              {subCat}
                            </Button>
                          )
                        })))
                      : (
                        <Typography>
                          Debe seleccionar una categoria
                        </Typography>
                        )}
                  </Box>
                </Grid>
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
                        label='Marcas'
                        name='brand'
                        onChange={(e) => handleChangeBrand(e)}
                        required
                        key={key}
                        value={newBrand.value}
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
                        onClick={submitBrand}
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
                    label='Marcas registradas'
                    name='allBrands'
                    select
                    helperText='Haga click sobre la marca que desea eliminar'
                    SelectProps={{ native: true }}
                    variant='outlined'
                  >
                    {(allBrands && allBrands)
                      ? (allBrands && allBrands.map((brand) => {
                          return (
                            <option
                              key={brand.id}
                              value={brand.name}
                            >
                              {brand.name}
                            </option>
                          )
                        }))
                      : ('asd')}
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
