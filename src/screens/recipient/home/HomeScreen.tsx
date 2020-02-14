import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles, createStyles } from '@material-ui/core'
import { Route, useHistory, useLocation, Switch, Redirect } from 'react-router-dom'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import CertificateScreen from './certificates/CertificatesScreen'
import PathwaysScreen from './pathways/PathwaysScreen';
import AIScreen from './ai/AIScreen';
import CertificateView from './certificates/CertificateView'

const useStyles = makeStyles((theme)=>(
  createStyles({
    screen: {
      height: '75%', width: "100%",
      backgroundColor: 'rgba(0,0,0,.9)',
      overflowY: 'scroll'
    },
    bottomTabs: {
      backgroundColor: 'rgb(40,40,40)',
      height: '10%', width: "100%",
    }
  })
))

const HomeScreen: React.FC = (props) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()

  return (
    <div style={{height: "100%"}}>
      <div className={classes.screen}>
        <Switch>
          <Route exact path="/home/certificates">
            <CertificateScreen/>
          </Route>
          <Route exact path="/home/ai">
            <AIScreen/>
          </Route>
          <Route path="/home/pathways">
            <PathwaysScreen/>
          </Route>
          <Route path="/home">
            <Redirect to="/home/pathways"/>
          </Route>
          <Route>
            404 not found
          </Route>
        </Switch>
      </div>
      <BottomNavigation
        showLabels
        className={classes.bottomTabs}
        onChange={(e, value: number)=>{
          switch(value){
            case 0: history.push('/home/certificates'); break
            case 1: history.push('/home/pathways'); break
            case 2: history.push('/home/ai'); break
            default: throw new Error("bottom tab error, route not found")
          }
        }}
      >
        <BottomNavigationAction label="Certificates" style={{color: "white"}} icon={<VerifiedUserIcon htmlColor={location.pathname==="/home/certificates" ? 'red' : 'grey'} fontSize='large'/>} />
        <BottomNavigationAction label="Pathways" style={{color: "white"}} icon={<VerifiedUserIcon htmlColor={location.pathname==="/home/pathways" ? 'red' : 'grey'} fontSize='large'/>} />
        <BottomNavigationAction label="AI" style={{color: "white"}} icon={<VerifiedUserIcon htmlColor={location.pathname==="/home/ai" ? 'red' : 'grey'} fontSize='large'/>} />
      </BottomNavigation>
    </div>
  )
}

export default HomeScreen