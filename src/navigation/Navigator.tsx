import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import Routes from './Routes'

const Navigator: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                {Object.keys(Routes).map((routeName, index)=>{
                    const route = Routes[routeName]
                    const Component = Routes[routeName].component
                    if(routeName != "NotFound")
                        return(
                            route.protected ? 
                            <PrivateRoute path={route.path} component={Component} key={index}/>
                                :
                            <Route path={route.path} key={index}>
                                <Component/>
                            </Route>
                        )
                })}
                <Route>
                    {Routes["NotFound"].component}
                </Route>
            </Switch>
        </Router>
    )
}

type routeProps = {
    component: React.FC<any>,
    [key: string]: any
}
const PrivateRoute = ({ component: Component, ...rest }: routeProps) => (
    <Route {...rest}>
        {false ?  // auth service here
            <Component />
                :
            <Redirect to={{
                pathname: '/',
                state: { from: rest.location }
            }}/>
        }
    </Route>
)

export default Navigator