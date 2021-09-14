import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
import { Box, Container, TableHead, Checkbox, TableCell, Table, TableRow, TableBody, Avatar, TextField } from '@material-ui/core'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { useDispatch, useSelector } from 'react-redux'
import { EditProduct } from '../components/product/ProductEdit'
// import ProductListResult from '../components/product/ProductListResult'
// import ProductListToolbar from '../components/product/ProductListToolbar'

const AddProducts = ({ ...rest }) => {
  const dispatch = useDispatch()
  const products = useSelector(store => store.products.allProducts)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  // const [product, setProducts] = useState([])

  useEffect(() => {
  }, [dispatch])

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>

          <Box sx={{ pt: 3 }}>
            <PerfectScrollbar>
              <Box sx={{ minWidth: 1050 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding='checkbox'>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        Imagen
                      </TableCell>
                      <TableCell>
                        Marca
                      </TableCell>
                      <TableCell>
                        Modelo
                      </TableCell>
                      <TableCell>
                        Categoria
                      </TableCell>
                      <TableCell>
                        Subcategoria
                      </TableCell>
                      <TableCell>
                        Precio
                      </TableCell>
                      <TableCell>
                        Descuento
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {/* ACÁ VA EL COMPONENTE CON EL TABLE BODY */}
                  <EditProduct products={products} page={page} />
                </Table>
              </Box>
            </PerfectScrollbar>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AddProducts
