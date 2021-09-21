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
  TableSortLabel,
  Tooltip,
  Chip
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const LatestOrders = ({ handleOpen, allPayments }) => (
  <Card>
    <CardHeader title='Últimos pagos realizados' />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 750 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Nº Ref
              </TableCell>
              <TableCell>
                Cliente
              </TableCell>
              <TableCell sortDirection='desc'>
                <Tooltip
                  enterDelay={300}
                  title='Sort'
                >
                  <TableSortLabel
                    active
                    direction='asc'
                  >
                    Fecha
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPayments.map((order) => (
              <TableRow
                onClick={() => handleOpen(order.id)}
                hover
                key={order.id}
              >
                <TableCell>
                  {order.id}
                </TableCell>
                <TableCell>
                  {/* {order.card.cardholder.name.toUpperCase()} */}
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
      >
        View all
      </Button>
    </Box>
  </Card>
)

export default LatestOrders
