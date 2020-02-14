import { Action, action } from "easy-peasy";

export interface ApplicationSchema {
  title: string
  setTitle: Action<ApplicationSchema, string>
}

const AplicationModel: ApplicationSchema = {
  title: "",
  setTitle: action((state, payload)=>{state.title = payload})
};

export default AplicationModel;
