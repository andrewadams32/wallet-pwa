import React, { useMemo, useState } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>(
  createStyles({
    title: {
      width: "100%"
    }
  })
))

type NavProps = {
  routeName: string
}
const NavBar: React.FC<NavProps> = ({ routeName }) => {
  const classes = useStyles()

  const screenName = useMemo(() => {
    switch (routeName) {
      case '/home': return "Home"
      default: return ""
    }
  }, [routeName])

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" align="center" className={classes.title}>
          {screenName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar