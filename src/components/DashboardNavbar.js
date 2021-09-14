import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Logo from './Logo'
import { useDispatch } from 'react-redux'
import { logOut } from 'src/redux/actions/user'
import { toastCustom } from '../Tools/Toastify'

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const unLog = () => {
    dispatch(logOut())
    navigate('/', { replace: true })
    toastCustom('Tu sesión ha sido cerrada!', 'warning', 4000, 'bottom-right')
  }
  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to='/'>
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden xlDown>
          <IconButton color='inherit' size='large'>
            <Badge
              badgeContent={notifications.length}
              color='primary'
              variant='dot'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' size='large' onClick={unLog}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onMobileNavOpen} size='large'>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
}

export default DashboardNavbar
