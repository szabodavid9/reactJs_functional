import React, {Component} from 'react'
import App from './App'

// import {
//     HashRouter,
//     Route
// } from 'react-router-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class RouterApp extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          {/* StreamList */}
          <Route path='/streamlist/:gamename' component={App} />
          {/* ActualStream */}
          <Route path='/livestream/:channelURL' component={App} />
        </Switch>
      </Router>)
  }
}

export default RouterApp
