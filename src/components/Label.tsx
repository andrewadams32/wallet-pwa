import React from "react";
import { Typography } from '@material-ui/core'

type props = {
  content: string
}
const Label: React.FC<props> = ({content}) => {
  return (
    <Typography style={{
      marginLeft: "1rem",
      color: "rgba(255,255,255,.5)",
      marginBottom: ".5rem"
    }}>
      {content}
    </Typography>
  )
}

export default Label
