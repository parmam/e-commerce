import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import categories from './categories'
import products from './products'

const persistConfig = {
  key: 'root',
  debug: true,
  storage
}

const rootReducer = combineReducers({
  products,
  categories

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
