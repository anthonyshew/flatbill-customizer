import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './global.scss'

import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
// import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'

const App = () => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        {/* <LocalStorageManager /> */}
        <AppWrapper />
      </StateProvider>
    </Router >
  )
}

export default App;