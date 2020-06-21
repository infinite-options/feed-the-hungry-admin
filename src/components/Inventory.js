import React, { Component } from 'react'
import { Row, Col, Card, Dropdown, DropdownButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Table from './Table'
import Filter from './Filter'
import NavBar from './NavBar'
import axios from 'axios'

export default class Inventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            base: 'https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/',
            columns: [],
            search_c: '',
            search_d: '',
            search_f: '',
            data: [],
            banks: []
        }
    }


    componentDidMount = () => {
        this.excess()
    }

    excess = async () => {
        var resp = []
        var data = []
        var banks = []
        await axios.get(`${this.state.base}excess`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
            if (object.fb_name === this.state.search_d || this.state.search_d === '')
              data.push({
                  name: object.fl_name,
                  excess: object.inv_qty-object.excess,
                  quantity: object.inv_qty
              })
        })

        const columns = [
            { field: 'name', headerName: 'Name', sortable: true, unSortIcon: true, filter: true, width: 450 },
            { field: 'excess', headerName: 'Anticipated Usage', sortable: true, unSortIcon: true, filter: true, width: 300 },
            { field: 'quantity', headerName: 'Quantity', sortable: true, unSortIcon: true, filter: true, width: 300 },
        ]

        this.setState({
            ...this.state,
            columns: columns,
            data: data,
            mode: '1',
            banks: banks
        })
    }

    low = async () => {
        var resp = []
        var data = []
        var banks = []
        await axios.get(`${this.state.base}low`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )


        resp.map(object => {
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
            if (object.fb_name === this.state.search_d || this.state.search_d === '')
              data.push({
                  name: object.fl_name,
                  excess: object.excess,
                  quantity: object.inv_qty
              })
        })

        const columns = [
            { field: 'name', headerName: 'Name', sortable: true, unSortIcon: true, filter: true, width: 450 },
            { field: 'excess', headerName: 'Low', sortable: true, unSortIcon: true, filter: true, width: 300 },
            { field: 'quantity', headerName: 'Quantity', sortable: true, unSortIcon: true, filter: true, width: 300 },
        ]

        this.setState({
            ...this.state,
            columns: columns,
            data: data,
            mode: '2',
            banks: banks
        })
    }

    zero = async () => {
        var resp = []
        var data = []
        var banks = []
        await axios.get(`${this.state.base}zero`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
            if (object.fb_name === this.state.search_d || this.state.search_d === '')
              data.push({
                  name: object.fl_name,
              })
        })

        const columns = [
            { field: 'name', headerName: 'Name', sortable: true, unSortIcon: true, filter: true, width: 1050 },
        ]

        this.setState({
            ...this.state,
            columns: columns,
            data: data,
            mode: '3',
            banks: banks
        })
    }


    changeMode = async (mode) => {
        switch (mode) {
            case '1':
                await this.excess()
                break;
            case '2':
                await this.low()
                break;
            case '3':
                await this.zero()
                break;
        }
    }


    updateSearch = state => {
        this.setState({
            ...this.state,
            search_c: state.search_c,
            search_d: state.search_d,
            search_f: state.search_f,
        })
        this.changeMode(this.state.mode)
    }


    render() {
        return (
          <>
            <NavBar ddlist={this.state.banks} update={async bank => {await this.updateSearch({...this.state, search_d: bank})}}/>
            <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
                <Row>
                    <Col xs="5">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value)}>Excess</ToggleButton>
                            <ToggleButton value={2} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value)}>Low</ToggleButton>
                            <ToggleButton value={3} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value)}>Zero</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Filter update={this.updateSearch} ddlist={this.state.ddlist} />
                </Row>
                <Card style={{ padding: '10px' }}>
                    <Card>
                        <Table columns={this.state.columns} data={this.state.data} />
                    </Card>
                </Card>
            </Card>
          </>
        );
    }
}
