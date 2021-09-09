import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import products from './products'

const persistConfig = {
  key: 'root',
  debug: true,
  storage
}

const rootReducer = combineReducers({
  products

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
