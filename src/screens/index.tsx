import LoginScreen from './shared/login'
import NotFound from './shared/not-found'

import recipient from './recipient'
import admin from './admin'

export const RecipientScreens = {
    ...recipient
}

export const AdminScreens = {
  ...admin
}

export const SharedScreens = {
  LoginScreen,
  NotFound
}