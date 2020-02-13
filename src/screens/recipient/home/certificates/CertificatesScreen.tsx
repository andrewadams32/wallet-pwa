import React, { useState } from 'react'
import { Container, Card, makeStyles, createStyles, Box, Typography } from '@material-ui/core'

import InfoBox from '../../../../components/InfoBox'

const useStyles = makeStyles(()=>createStyles({
  container: {
    paddingTop: '.5rem',
    paddingLeft: 0, paddingRight: 0
  },
  card: {
    height: '7rem',
    marginTop: '.7rem', marginBottom: '.7rem',
    padding: '.3rem',
    borderRadius: 0,
    backgroundColor: 'rgb(40,40,40)',
    color: 'white'
  },
  fCard: {
    margin: 0
  }
}))

const CertificatesScreen: React.FC = (props) => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <InfoBox>
        <Typography>
          ALL YOUR UPLOADED BADGES
        </Typography>
      </InfoBox>
      {
      [0,1,2,3,4].map((val)=>
        <Card key={val} className={`${classes.card} ${val === 0 ? classes.fCard : ""}`} variant="outlined">
          {val}
        </Card>
      )
      }
    </Container>
  )
}

export default CertificatesScreen