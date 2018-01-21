import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import worldMapData from './data/worldmap-data'

const initialState = {
  mapData: worldMapData,
}

const store = configureStore()

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
