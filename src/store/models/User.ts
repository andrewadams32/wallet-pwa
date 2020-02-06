import { Action, action, ActionOn, actionOn, Thunk, thunk } from "easy-peasy";

import auth from '../../api/authentication'
import { StoreSchema } from "./";

const TIME_TO_EXPIRE = 1000 * 60 * 60 * 24

export interface UserSchema {
  email: string
  loggedIn: boolean
  loggedInTime?: number
  authExpireTime?: number
  setEmail: Action<UserSchema, string>
  setLoggedIn: Action<UserSchema, boolean>
  login: Thunk<UserSchema, string, void, StoreSchema>
  logout: Thunk<UserSchema>
}
const UserModel: UserSchema = {
  //values
  email: "",
  loggedIn: false,
  //actions
  setEmail: action((store, payload) => {
    store.email = payload;
  }),
  setLoggedIn: action((store, payload) => {
    if(payload){ // login
      let now = new Date().getTime()
      store.loggedInTime = now
      store.authExpireTime = now + TIME_TO_EXPIRE
    } else { // logout
      store.email = ""
      store.loggedInTime = undefined
      store.authExpireTime = undefined
    }
    store.loggedIn = payload;
  }),
  //thunks
  login: thunk(async (actions, password, { getStoreState }) => {
    const { User } = getStoreState();
    const loggedIn = await auth.login(User.email, password)
    if (loggedIn) actions.setLoggedIn(true)
  }),
  logout: thunk(async actions => {
    await auth.logout()
    actions.setLoggedIn(false)  
  }),
  //listeners
};
export default UserModel;
