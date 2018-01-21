import React from 'react'
import PropTypes from 'prop-types'
// import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../views/App'


const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

/*Root.propTypes = {
  store: PropTypes.object.isRequired,
}*/

export default Root
