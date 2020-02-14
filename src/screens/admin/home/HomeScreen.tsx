import React from 'react'
import InfoBox from '../../../components/InfoBox'
import { makeStyles, Typography, Button } from '@material-ui/core'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom'
import Screen from '../../../components/Screen'
import { colors } from '../../../config/theme'

const useStyles = makeStyles((theme)=>({
  screen: {
    height: '100%', width: "100%",
    backgroundColor: colors.screenColor,
    overflowY: 'scroll',
    paddingTop: theme.spacing(2)
  },
  label: {
    height: "2rem",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    paddingLeft: theme.spacing(1)
  },
  option: {
    color: "white",
    border: ".1px solid grey",
    borderLeft: 0, borderRight: 0,
    backgroundColor: colors.lightGrey,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: 0,
    width: "100%",
    height: "2.5rem !important",
    paddingLeft: theme.spacing(1)
  },
  pressIcon: {
    transform: "rotate(180deg)",
    color: "rgba(255,255,255,.5)",
    fontSize: "1rem"
  }
}))


const AdminHome: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  return(<>
    <Screen>
      <InfoBox className={classes.label}>
        <Typography>
          Institute
        </Typography>
      </InfoBox>      
      <InfoBox className={classes.option} style={{height: "2rem", textTransform: "capitalize"}} onClick={()=>history.push("/admin/institutes")} as={Button}>
        <Typography>
          Manage Institutes
        </Typography>
        <ArrowBackIos className={classes.pressIcon}/>
      </InfoBox>      
      <InfoBox className={classes.label}>
        <Typography>
          Programs
        </Typography>
      </InfoBox>      
      <InfoBox className={classes.option} style={{height: "2rem", textTransform: "capitalize"}}  as={Button}>
        <Typography>
          Manage Programs
        </Typography>
        <ArrowBackIos className={classes.pressIcon}/>
      </InfoBox>      
      <InfoBox className={classes.label}>
        <Typography>
          Tracks
        </Typography>
      </InfoBox>      
      <InfoBox className={classes.option} style={{height: "2rem", textTransform: "capitalize"}}  as={Button}>
        <Typography>
          Manage Tracks
        </Typography>
        <ArrowBackIos className={classes.pressIcon}/>
      </InfoBox>
    </Screen></>
  )
}

export default AdminHome