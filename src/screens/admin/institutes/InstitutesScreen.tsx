import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import { useHistory } from 'react-router-dom'

import Screen from '../../../components/Screen'
import InfoBox from '../../../components/InfoBox'
import Label from './../../../components/Label';
import { colors } from '../../../config/theme'

const OptionItem: React.FC = ({children}) => {
  return(
    <Button>
      {children}
    </Button>
  )
}

const useStyles = makeStyles((theme)=>({
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
    paddingLeft: "1rem"
  },
  pressIcon: {
    transform: "rotate(180deg)",
    color: "rgba(255,255,255,.5)",
    fontSize: "1rem"
  }
}))

const InstitutesScreen = () => {
  const classes = useStyles()
  const history = useHistory()
  return(
    <Screen>
      <Label content="Existing Institutes"/>
      <InfoBox className={classes.option} style={{height: "2rem", textTransform: "capitalize"}} onClick={()=>history.push("/admin")} as={Button}>
        <Typography>
          California State University, Fresno
        </Typography>
        <ArrowBackIos className={classes.pressIcon}/>
      </InfoBox>
    </Screen>
  )
}

export default InstitutesScreen