import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Donors from './components/Donors'
import Orders from './components/Orders'
import Inventory from './components/Inventory'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/">
              <Redirect to="/donors"/>
            </Route>
            <Route exact path="/feed-the-hungry-admin">
              <Redirect to="/donors"/>
            </Route>
            <Route exact path="/donors" component={Donors} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/inventory" component={Inventory} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
