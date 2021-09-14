import { TableBody, Avatar, TextField, TableCell, TableRow, Checkbox, Box } from '@material-ui/core'

export const EditProduct = ({ products, page }) => {
  return (

    <TableBody>
      {products && products.slice(page, page + 10).map((product) => (
        <TableRow
          hover
          key={product.id}
        >
          <TableCell padding='checkbox'>
            <Checkbox
        // checked={selectedProductIds.indexOf(product.id) !== -1}
        // onChange={(event) => handleSelectOne(event, product.id)}
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
            <TextField id='standard-basic' label={product.brand} />

          </TableCell>
          <TableCell>
            {product.model}

          </TableCell>
          <TableCell>
            {/* {product.subCategory.category.name} */}
          </TableCell>
          <TableCell>
            {/* {product.subCategory.name} */}

          </TableCell>
          <TableCell>
            {product.price}
          </TableCell>
          <TableCell />
        </TableRow>
      ))}

    </TableBody>

  )
}
