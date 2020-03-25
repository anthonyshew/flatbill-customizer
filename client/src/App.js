import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './global.scss'

import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
// import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'
import Receipt from './components/Receipt'

const App = () => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        {/* <LocalStorageManager /> */}
        <Switch>
          <Route exact path="/" component={AppWrapper} />
          <Route path="/receipt/" component={Receipt} />
          <Route render={() => <p>404</p>} />
        </Switch>
      </StateProvider>
    </Router >
  )
}

export default App;