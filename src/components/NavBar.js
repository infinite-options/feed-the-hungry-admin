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
                        <Nav>
                            <Link to="/customers" className="nav-link">
                                Customers
                            </Link>
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title={this.search_d || 'All Banks'} variant="outline-secondary" size='md' drop='left'>
                            <Dropdown.Item onClick={() => {this.search_d = ''; this.props.update('')}}>All</Dropdown.Item>
                            {this.props.ddlist.map(object => {
                                return (
                                    <Dropdown.Item onClick={() => {this.search_d = object; this.props.update(object)}}>{object}</Dropdown.Item>
                                )
                            })}
                        </DropdownButton>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar)
