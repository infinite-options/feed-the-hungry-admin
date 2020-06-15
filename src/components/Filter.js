import React, { Component } from 'react'
import {Row, Col, Card, Dropdown, DropdownButton, Navbar, FormControl, Form } from 'react-bootstrap'


export default class Filter extends Component {
    constructor(params) {
        super(params)
        this.state = {
            search_c: '',
            search_d: '',
            search_f: '',
            search_st: new Date('2016-01-01'),
            search_et: new Date(),
        }

    }


    updateSearch = async e => {
        await this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state);
        
        this.props.update(this.state)
      }

    render() {
        console.log(this.props.data)
        return (

            <Card style={{ margin: '15px' }} >
                <Navbar style={{ width: '100%' }}>
                    <Form >
                        <Row>
                            <Col xs={2} >
                                <Form.Label>Name</Form.Label>
                                <DropdownButton id="dropdown-basic-button" title={this.state.search_d || 'All Banks'} size="sm" variant="outline-secondary" size='md'>
                                    <Dropdown.Item onClick={async () => {await this.setState({ ...this.state, search_d: '' }); this.props.update(this.state)}}>All</Dropdown.Item>
                                    {this.props.ddlist.map(object => {
                                        return (
                                            <Dropdown.Item onClick={async () => {await this.setState({ ...this.state, search_d: object }); this.props.update(this.state)}}>{object}</Dropdown.Item>
                                        )
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col xs={3}>
                                <Form.Label>Start Date & Time</Form.Label>
                                <FormControl type="datetime-local" value={this.state.search_st} onChange={this.updateSearch} name="search_st" />
                            </Col>
                            <Col xs={3}>
                                <Form.Label>End Date & Time</Form.Label>
                                <FormControl type="datetime-local" value={this.state.search_et} onChange={this.updateSearch} name="search_et" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Search Category</Form.Label>
                                <FormControl type="text" placeholder="Filter Category" value={this.state.search_f} onChange={this.updateSearch} name="search_f" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Search Code</Form.Label>
                                <FormControl type="text" placeholder="Filter Code" value={this.state.search_c} onChange={this.updateSearch} name="search_c" />
                            </Col>
                        </Row>
                    </Form>
                </Navbar>
            </Card>
        )
    }
}
