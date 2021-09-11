
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../redux/actions/products'



const ProductListResults = ({ allProducts, eventHandler, setEventHandler, ...rest }) => {
  const [products, setProducts] = useState([])
  const [selectedProductIds, setSelectedProductIds] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  const [flag, setFlag] = useState(1)
  const dispatch = useDispatch()
 

  useEffect(() => {
    if (!allProducts || allProducts !== products) {
      (async () => {
        setProducts(allProducts.filter(products => products.state))
      })()
      console.log(products)
    }
  },[allProducts])

  useEffect(() => {
    if(!selectedProductIds.length){
      setEventHandler({...eventHandler, deleteProductsBtn:false, selectedProducts:selectedProductIds})
    }
    if(selectedProductIds.length){
      setEventHandler({...eventHandler, deleteProductsBtn:true, selectedProducts:selectedProductIds})
    }
},[selectedProductIds])


  useEffect(() => {
  },[selectedProductIds])

  const handleSelectAll = (event) => {
    let newSelectedProductId
    if (event.target.checked) {
      newSelectedProductId = products.map((product) => product.id)
    } else {
      newSelectedProductId = []
    }
    setSelectedProductIds(newSelectedProductId)
  }

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductIds.indexOf(id)
    let newSelectedProductId = []

    if (selectedIndex === -1) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds, id)
    } else if (selectedIndex === 0) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds.slice(1))
    } else if (selectedIndex === selectedProductIds.length - 1) {
      newSelectedProductId = newSelectedProductId.concat(selectedProductIds.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelectedProductId = newSelectedProductId.concat(
        selectedProductIds.slice(0, selectedIndex),
        selectedProductIds.slice(selectedIndex + 1)
      )
    }
    setSelectedProductIds(newSelectedProductId)
  }

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedProductIds.length === products.length}
                    color='primary'
                    indeterminate={
                      selectedProductIds.length > 0 &&
                      selectedProductIds.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
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
            <TableBody>
              {products.slice(page, page + limit).map((product) =>  (
                <TableRow
                  hover
                  key={product.id}
                  selected={selectedProductIds.indexOf(product.id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedProductIds.indexOf(product.id) !== -1}
                      onChange={(event) => handleSelectOne(event, product.id)}
                      value='true'
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={product.img}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    {product.brand}
                  </TableCell>
                  <TableCell>
                    {product.model}

                  </TableCell>
                  <TableCell>
                    {product.subCategory.category.name}
                  </TableCell>
                  <TableCell>
                    {product.subCategory.name}

                  </TableCell>
                  <TableCell>
                    {product.price}
                  </TableCell>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={products.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[10]}
      />
    </Card>
  )
}

// ProductListResults.propTypes = {
//   products: PropTypes.array.isRequired
// };

export default ProductListResults
