import React, { useMemo } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, createStyles, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useStoreActions, useStoreState } from '../hooks/TypedState'
import { useHistory, useLocation } from 'react-router-dom';

import {colors} from '../config/theme'

const useStyles = makeStyles((theme)=>(
  createStyles({
    title: {
      width: "100%",
      fontWeight: 'bold',
      marginLeft: 0
    },
    appBar: {
      padding: '.5rem',
      backgroundColor: colors.lightGrey
    },
    upper: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    iconButton: {
      margin: 0,
      padding: 0,
      justifyContent: 'center',
      alignItems: "center"
    }
  })
))

type NavProps = {
  routeName: string
  style: React.CSSProperties
}
const NavBar: React.FC<NavProps> = ({ style }) => {
  const classes = useStyles()
  const logout = useStoreActions(({User})=>User.logout)
  const user = useStoreState(({User})=>User)
  const Title = useStoreState(({Application})=>Application.title)
  const history = useHistory()
  const location = useLocation()

  const LeftButton: React.FC = useMemo(()=>{
    if(user.roles.includes("admin") && !location.pathname.includes("home")){
      return ()=>(
        <IconButton className={classes.iconButton} color="inherit">
          <ArrowBackIosIcon style={{fontSize: "2rem"}} onClick={()=>history.goBack()}/>
        </IconButton>
      )
    }
    else if(user.roles.includes("recipient")){
      return ()=>(
        <IconButton className={classes.iconButton} color="inherit">
          <AddIcon fontSize="large"/>
        </IconButton>
      )
    }
    else return ()=><div></div>
  },[user.roles, location.pathname])

  return (
    <AppBar position="static" className={classes.appBar} style={style}>
      <div className={classes.upper}>
        <LeftButton/>  
        <IconButton onClick={()=>{logout()}} className={classes.iconButton} color="inherit">
          <PersonIcon fontSize="large"/>  
        </IconButton>
      </div>
      <Toolbar style={{paddingLeft: 0}}>
        <Typography variant="h4" className={classes.title}>
          {Title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar