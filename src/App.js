import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/NavBar'
import Donors from './components/Donors'
import Orders from './components/Orders'
import Inventory from './components/Inventory'
import Customer from './components/Customer'


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Donors} />
            <Route exact path="/donors" component={Donors} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/customers" component={Customer} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
