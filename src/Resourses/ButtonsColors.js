import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { red, purple, green } from '@material-ui/core/colors'

export const ButtonAdmin = withStyles((theme) => ({
  root: {
    width: 100,
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    }
  }
}))(Button)

export const ButtonDesactivar = withStyles((theme) => ({
  root: {
    width: 100,
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
}))(Button)

export const ButtonActivar = withStyles((theme) => ({
  root: {
    width: 100,
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  }
}))(Button)
