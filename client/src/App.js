import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './global.scss'

import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
// import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'
import Header from './components/Header'
import ViewBar from './components/ViewBar'
import ProductDisplay from './components/ProductDisplay'
import HorizontalSlider from './components/HorizontalSlider'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <AppWrapper>
          {/* <LocalStorageManager /> */}
          <Header />
          <ProductDisplay />
          <ViewBar />
          <HorizontalSlider />
          <Footer sticky price={200} />
        </AppWrapper>
      </StateProvider>
    </Router >
  )

}

export default App;
