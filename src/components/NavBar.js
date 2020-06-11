import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="d-flex p-2 bd-highlight" >
                    <Navbar>
                        <Navbar.Brand href="/">
                            Feed the Hungry
                        </Navbar.Brand>
                    </Navbar>
                    <Form inline style={{ width: '45%' }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav className="mr-auto" >
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
                        <Nav>
                            <Link to="/customers" className="nav-link">
                                Customers
                            </Link>
                        </Nav>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar)
