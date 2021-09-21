import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import Navigation from './src/navigation'
import store from './src/redux'


const persistor = persistStore(store)

export default function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  )
}
