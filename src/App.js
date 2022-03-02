import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './redux/store'

import Main from './pages/Main'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  )
}

export default App
