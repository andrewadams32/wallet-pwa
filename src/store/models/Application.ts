import { Computed, computed, Action, action, persist } from "easy-peasy";
import * as localforage from 'localforage'

export interface ApplicationSchema {
  lastRoute: string
}

const AplicationModel: ApplicationSchema = persist({
  lastRoute: ""
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
});

export default AplicationModel;
