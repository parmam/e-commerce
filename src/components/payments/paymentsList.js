import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Stack,
  Typography,
  Pagination
} from '@material-ui/core'
import { useState } from 'react'

const PaymentList = ({ handleOpen, allPayments }) => {
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const limit = 7
  const lastObj = page * limit + 1
  const firstObj = lastObj - limit

  return (
    <Card>
      <CardHeader title='Últimos pagos realizados' />
      <Divider />
      <PerfectScrollbar>
        <Box style={{ width: '95wh', height: '70vh' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nº Ref
                </TableCell>
                <TableCell>
                  Cliente
                </TableCell>
                <TableCell>
                  Fecha Modificación
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPayments.slice(firstObj, lastObj).map((order) => (
                <TableRow
                  onClick={() => handleOpen(order.id)}
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.id}
                  </TableCell>
                  <TableCell>
                    {order.card.cardholder.name.toUpperCase()}
                  </TableCell>
                  <TableCell>
                    {moment(order.date_created).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color='primary'
                      label={order.status}
                      size='small'
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={allPayments.length - limit} page={page} onChange={handleChange} />
      </Stack>
    </Card>
  )
}

export default PaymentList
