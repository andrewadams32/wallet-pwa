import React, { useState } from 'react'
import { makeStyles, createStyles, Paper, Container, Card, Theme } from '@material-ui/core'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles(()=>createStyles({
  container: {
    padding: '.5rem',
  },
  card: {
    height: '10rem'
  }
}))
const AIScreen: React.FC = (props) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        hello
      </Card>
    </Container>
  )
}

export default AIScreen