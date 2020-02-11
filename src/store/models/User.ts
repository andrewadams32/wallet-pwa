import { Action, action, Thunk, thunk, persist } from "easy-peasy";

import auth from '../../api/authentication'
import { StoreSchema } from "./";
import * as localforage from 'localforage'

export type role = "admin" | "issuer" | "issuer-organization" | "recipient" | "any"

export interface UserSchema {
  email: string
  loggedIn: boolean
  roles: role[]
  setEmail: Action<UserSchema, string>
  setLoggedIn: Action<UserSchema, {value: boolean, roles: role[]}>
  login: Thunk<UserSchema, string, void, StoreSchema>
  logout: Thunk<UserSchema>
}
const UserModel: UserSchema = persist({
  //values
  email: "",
  roles: [],
  loggedIn: false,
  //actions
  setEmail: action((store, payload) => {
    store.email = payload;
  }),
  setLoggedIn: action((user, payload) => {
    user.loggedIn = payload.value;
    user.roles = payload.roles
  }),
  //thunks
  login: thunk(async (actions, password, { getStoreState }) => {
    const { User } = getStoreState();
    const loggedIn = await auth.login(User.email, password)
    if (loggedIn) actions.setLoggedIn({value: true, roles: ["recipient"]})
  }),
  logout: thunk(async actions => {
    await auth.logout()
    actions.setLoggedIn({value: false, roles: []})  
  }),
  //listeners
}, {
  mergeStrategy: "mergeDeep",
  storage: localforage,
});
export default UserModel;
