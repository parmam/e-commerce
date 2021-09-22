import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import GroupButtons from 'src/Resources/GroupButtons'
import { ButtonStateGreen, ButtonStateGrey } from 'src/Resources/ButtonState'
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
  Typography,
  Link
} from '@material-ui/core'
import getInitials from '../../utils/getInitials'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from 'src/redux/actions/user'
import { UserMinus } from 'react-feather'
import { ApiURL } from 'src/config'
// import { Users } from 'react-feather'
const CustomerListResults = ({ userType, ...rest }) => {
  const [selectedUsersIds, setSelectedUsersIds] = useState([])
  const [page, setPage] = useState(0)

  const dispatch = useDispatch()
  const usersRedux = useSelector(store => store.user.users)
  let users = usersRedux.filter(user => user.type !== userType && user.type !== 'Super')

  users.sort(function (a, b) {
    if (a.name < b.name) {
      return 1
    }
    if (a.name > b.name) {
      return -1
    }
    return 0
  })

  const handleSelectAll = (event) => {
    let newSelectedUsersIds

    if (event.target.checked) {
      newSelectedUsersIds = users.map((customer) => customer.id)
    } else {
      newSelectedUsersIds = []
    }

    setSelectedUsersIds(newSelectedUsersIds)
  }

  useEffect(() => {
    dispatch(getUsers())
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
                    checked={selectedUsersIds.length === users.length}
                    color='primary'
                    indeterminate={
                    selectedUsersIds.length > 0 &&
                    selectedUsersIds.length < users.length
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
              {users && users.slice(page, page + 10).map((user, i) => (

                <TableRow hover key={user.id} selected={selectedUsersIds.indexOf(user.id) !== -1}>
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
                        {user.name && user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email && user.email}
                  </TableCell>
                  <TableCell>
                    {user.address && user.cp ? (user.address + ' - ' + '(' + user.cp + ')') : null}
                    {/* {`${user.address.city}, ${user.address.state}, ${user.address.country}`} */}
                  </TableCell>
                  <TableCell>
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
        page={page}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}
      />
    </Card>
  )
}

CustomerListResults.propTypes = {
  users: PropTypes.array.isRequired
}

export default CustomerListResults
