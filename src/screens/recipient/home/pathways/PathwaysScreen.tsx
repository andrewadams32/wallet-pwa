import React, { useState } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'

import Pathway from './Pathway'
import useTitle from '../../../../hooks/useTitle'

const PathwaysScreen: React.FC = (props) => {
  useTitle("Pathways")
  return (
    <>
    <Switch>
      <Route exact path="/home/pathways/:pathwayID">
        <Pathway />
      </Route>
      <Route>
        <p>testin 321</p>
      </Route>
    </Switch>
    </>
  )
}

export default PathwaysScreen