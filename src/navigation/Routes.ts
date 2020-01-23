import Screens from '../screens'

type Route = {
    [key: string]: {
        component: React.FC<any>,
        path: string,
        protected: boolean
    }
}

const Routes: Route = {
    Home: {
        component: Screens.HomeScreen,
        path: '/home',
        protected: true
    },
    Login: {
        component: Screens.LoginScreen,
        path: '/login',
        protected: false
    },
    NotFound: {
        component: Screens.NotFound,
        path: '',
        protected: false
    }
}

export default Routes