import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  screen: {
    height: '100%', width: "100%",
    backgroundColor: 'rgba(0,0,0,.9)',
    overflowY: 'scroll',
    paddingTop: theme.spacing(2),
    paddingRight: 0,
    paddingLeft: 0
  },
}))

const Screen: React.FC = ({children}) => {
  const classes = useStyles()
  return(
    <Container className={classes.screen}>
      {children}
    </Container>
  )
}

export default Screen