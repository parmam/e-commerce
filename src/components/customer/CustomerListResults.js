import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import GroupButtons from 'src/Resourses/GroupButtons'
import { ButtonStateGreen, ButtonStateGrey } from 'src/Resourses/ButtonState'
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
  TableRow,
  Typography
} from '@material-ui/core'
import getInitials from '../../utils/getInitials'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from 'src/redux/actions/user'
import { Users } from 'react-feather'

const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedUsersIds, setSelectedUsersIds] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const dispatch = useDispatch()
  const users = useSelector(store => store.user.users)
  // const [users, setUsers] = useState()
  const handleSelectAll = (event) => {
    let newSelectedUsersIds

    if (event.target.checked) {
      newSelectedUsersIds = users.map((customer) => customer.id)
    } else {
      newSelectedUsersIds = []
    }

    setSelectedUsersIds(newSelectedUsersIds)
  }

  console.log(users)
  useEffect(() => {
    dispatch(getUsers())
    // console.log(users[0].status)
    // console.log(users[1].status)
  }, [dispatch])

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsersIds.indexOf(id)
    let newSelectedUsersIds = []

    if (selectedIndex === -1) {
      newSelectedUsersIds = newSelectedUsersIds.concat(selectedUsersIds, id)
    } else if (selectedIndex === 0) {
      newSelectedUsersIds = newSelectedUsersIds.concat(selectedUsersIds.slice(1))
    } else if (selectedIndex === selectedUsersIds.length - 1) {
      newSelectedUsersIds = newSelectedUsersIds.concat(selectedUsersIds.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelectedUsersIds = newSelectedUsersIds.concat(
        selectedUsersIds.slice(0, selectedIndex),
        selectedUsersIds.slice(selectedIndex + 1)
      )
    }

    setSelectedUsersIds(newSelectedUsersIds)
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
                    checked={selectedUsersIds.length === customers.length}
                    color='primary'
                    indeterminate={
                    selectedUsersIds.length > 0 &&
                    selectedUsersIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page, page + limit).map((user) => (
                <TableRow
                  hover
                  key={user.id}
                  selected={selectedUsersIds.indexOf(user.id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedUsersIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
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
                        src={user.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography
                        color='textPrimary'
                        variant='body1'
                      >
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.address + ' - ' + '(' + user.cp + ')'}
                    {/* {`${user.address.city}, ${user.address.state}, ${user.address.country}`} */}
                  </TableCell>
                  <TableCell>
                    {/* {console.log(user.type, 'usertype')} */}
                    <GroupButtons id={user.id} type={user.type} status={user.status} />
                  </TableCell>
                  <TableCell>
                    {user.status === true
                      ? <ButtonStateGreen />
                      : <ButtonStateGrey />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[10]}
      />
    </Card>
  )
}

CustomerListResults.propTypes = {
  users: PropTypes.array.isRequired
}

export default CustomerListResults
