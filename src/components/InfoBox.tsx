import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  infoBox: {
    height: '2rem',
    color: 'rgba(255, 255, 255, .3)',
    backgroundColor: 'rgb(30,30,30)',
    margin: 0,
    padding: '.3rem'
  }
}))
type props = {
  className?: string,
  onClick?: ()=>any ,
  as?: React.ComponentType<any>
  style?: React.CSSProperties
}
const InfoBox: React.FC<props> = ({children, className, onClick=()=>{}, as: Component=Box, style={}}) => {
  const classes = useStyles()
  return(
    <Component className={`${classes.infoBox} ${className}`} onClick={onClick} style={style}>
      {children}
    </Component>
  )
}

export default InfoBox