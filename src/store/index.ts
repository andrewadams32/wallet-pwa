import { createStore } from 'easy-peasy'

import StoreModel from './models'

const store = createStore(StoreModel, {
  name: "Pathways-Store"
});

export default store
