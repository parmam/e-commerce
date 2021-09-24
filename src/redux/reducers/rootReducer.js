import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import categories from './categories'
import products from './products'
import user from './user'
import brands from './brands'
import payments from './payments'
import config from './config'

const persistConfig = {
  key: 'root',
  debug: true,
  storage
}

const rootReducer = combineReducers({
  products,
  categories,
  user,
  brands,
  payments,
  config
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
