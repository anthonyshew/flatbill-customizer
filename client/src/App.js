import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './global.scss'

import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'
import ProductDisplay from './components/ProductDisplay'
import HorizontalSlider from './components/HorizontalSlider'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <AppWrapper>
          <LocalStorageManager />
          <ProductDisplay model={"logo"} />
          <HorizontalSlider />
          <Footer sticky />
        </AppWrapper>
      </StateProvider>
    </Router >
  )

}

export default App;
