import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    RouteComponentProps
} from 'react-router-dom'

import Routes from './Routes'
import NotFound from '../screens/not-found'

const Navigator: React.FC = () => {
    return (
        <Router>
            <Switch>
                {Object.keys(Routes).map((routeName: string, index: number)=>{
                    const route = Routes[routeName]
                    const Component = route.component
                    return(
                        route.protected ? 
                        <PrivateRoute path={route.path} component={Component} key={index}/>
                            :
                        <Route path={route.path} key={index} render={(props: RouteComponentProps<any>)=>(
                            <Component {...props}/>
                        )}/>
                    )
                })}
                <Route exact path="/" render={(props: RouteComponentProps<any>)=>(
                    <Redirect {...props} to={{pathname: '/home', state: {from: props.location}}}/>
                )}/>
                <Route render={(props: RouteComponentProps<any>)=>(
                    <NotFound {...props}/>
                )}/>
            </Switch>
        </Router>
    )
}

type routeProps = {
    component: React.FC<any>,
    [key: string]: any
}
const PrivateRoute = ({ component: Component, ...rest }: routeProps) => (
    <Route {...rest} render={(props: RouteComponentProps<any>) => (
        true ? 
            (<Component {...props}/>)
        :
            (<Redirect to={{pathname: '/home', state: {from: props.location}}}/>)
    )}/>
)

export default Navigator