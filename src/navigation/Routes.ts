import Screens from '../screens'

type Routes = {
    [key: string]: {
        component: React.FC<any>,
        path: string,
        protected: boolean
    }
}

const Routes: Routes = {
    Home: {
        component: Screens.HomeScreen,
        path: '/home',
        protected: false
    },
    Login: {
        component: Screens.LoginScreen,
        path: '/login',
        protected: false
    }
}

export default Routes