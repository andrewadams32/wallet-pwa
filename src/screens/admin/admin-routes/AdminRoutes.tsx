import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import InstitutesScreen from '../institutes/InstitutesScreen'
import AdminHomeScreen from '../home/HomeScreen'

const AdminRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/admin/home">
        <AdminHomeScreen/>
      </Route>
      <Route exact path="/admin/institutes">
        <InstitutesScreen/>
      </Route>
      <Route exact path="/admin">
        <Redirect to="/admin/home"/>
      </Route>
      <Route>
        <div>404 not found</div>
      </Route>
    </Switch>
  )
}

export default AdminRoutes