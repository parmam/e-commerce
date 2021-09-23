import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const LatestOrders = ({ handleOpen, allPayments }) => {
  const lastPayments = allPayments?.sort((a, b) => {
    return new Date(b.date_created) - new Date(a.date_created)
  }).slice(0, 5)

  return (
    <Card>
      <CardHeader title='Últimos pagos realizados' />
      <Divider />
      <PerfectScrollbar>
        <Box style={{ width: '95wh', height: '52vh' }}>
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
              {lastPayments && lastPayments.map((order) => (
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color='primary'
          endIcon={<ArrowRightIcon />}
          size='small'
          variant='text'
          href='/app/payments'
        >
          Ver todos
        </Button>
      </Box>
    </Card>
  )
}

export default LatestOrders
