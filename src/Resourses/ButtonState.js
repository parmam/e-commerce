import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { grey, green } from '@material-ui/core/colors'

export const ButtonStateGreen = withStyles((theme) => ({
  root: {
    width: 10,
    borderRadius: 20,
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  }
}))(Button)

export const ButtonStateGrey = withStyles((theme) => ({
  root: {
    width: 10,
    borderRadius: 20,
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700]
    }
  }
}))(Button)
