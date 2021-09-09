import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Store from './redux/store'

const { persistor, store } = Store
ReactDOM.render(
  (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  ),
  document.getElementById('root')
)
