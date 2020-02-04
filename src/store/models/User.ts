import { Action, action, Thunk, thunk } from "easy-peasy";
import { StoreSchema } from "./";
import auth from '../../util/authentication'

export interface UserSchema {
  email: string;
  loggedIn: boolean;
  setEmail: Action<UserSchema, string>;
  setLoggedIn: Action<UserSchema, boolean>;
  login: Thunk<UserSchema, string, void, StoreSchema>;
  logout: Thunk<UserSchema>;
}
const UserModel: UserSchema = {
  email: "",
  loggedIn: false,
  setEmail: action((store, payload) => {
    store.email = payload;
  }),
  setLoggedIn: action((store, payload) => {
    store.loggedIn = payload;
  }),
  login: thunk(async (actions, password, { getStoreState }) => {
    const { User } = getStoreState();
    const loggedIn = await auth.login(User.email, password)
    if (loggedIn)
      actions.setLoggedIn(true)
  }),
  logout: thunk(async actions => {
    auth.logout()
    actions.setLoggedIn(false)  
  })
};
export default UserModel;
