import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button, Col, Dropdown, DropdownButton} from 'react-bootstrap'

class NavBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        search_d: ''
      }
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="d-flex justify-content-around p-2 bd-highlight" >
                    <Navbar.Brand href="/">
                        Feed the Hungry
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <DropdownButton id="dropdown-basic-button" title={this.search_d || 'All Banks'} variant="outline-secondary" size='md' drop='left'>
                        <Dropdown.Item onClick={() => {this.search_d = ''; this.props.update('')}}>All</Dropdown.Item>
                        {this.props.ddlist.map(object => {
                            return (
                                <Dropdown.Item onClick={() => {this.search_d = object; this.props.update(object)}}>{object}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                  </Navbar>
                  <Navbar bg="dark" variant="dark">
                    <Nav className="" >
                        <Nav>
                            <Link to="/donors" className="nav-link">
                                Donors
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="/orders" className="nav-link">
                                Orders
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="/inventory" className="nav-link">
                                Inventory
                            </Link>
                        </Nav>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar)
