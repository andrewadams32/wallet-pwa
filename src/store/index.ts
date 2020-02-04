import { createStore, persist } from 'easy-peasy'
import * as localforage from 'localforage'

import StoreModel from './models'

const store = createStore(persist(StoreModel, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
}));

export default store
