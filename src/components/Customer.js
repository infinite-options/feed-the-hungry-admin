import React, { Component } from 'react'
import { Row, Col, Card, Dropdown, DropdownButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Charts from './Charts'
import Filter from './Filter'
import NavBar from './NavBar'
import axios from 'axios'

export default class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            base: 'https://dc3so1gav1.execute-api.us-west-1.amazonaws.com/dev/api/v2/',
            data: '',
            search_c: '',
            search_d: '',
            search_f: '',
            title: '',
            xaxis: '',
            yaxis: '',
            graph: '',
            banks: []
        }
    }


    componentDidMount = () => {
        this.customervalue()
    }

    customervalue = async () => {
        var resp = []
        var xaxis = []
        var data = []
        var dict = {}
        var banks = []
        await axios.get(`${this.state.base}customervalue`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )
        resp.map(object => {
          if (object.fb_name === this.state.search_d || this.state.search_d === '')
            object.ctm_id in dict ? dict[object.ctm_id] += object.Total_Value : dict[object.ctm_id] = object.Total_Value
          if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
        })

        for (const [key, value] of Object.entries(dict)) {
            xaxis.push(key)
            data.push(value)
        }

        this.setState({
            ...this.state,
            data: data,
            xaxis: xaxis,
            yaxis: 'Value',
            title: 'Total Orders',
            graph: 'bar',
            banks: banks
        })
    }

    updateSearch = state => {
        this.setState({
            ...this.state,
            search_c: state.search_c,
            search_d: state.search_d,
            search_f: state.search_f,
        })
        this.customervalue()
    }


    render() {
        return (
          <>
            <NavBar ddlist={this.state.banks} update={async bank => {await this.updateSearch({...this.state, search_d: bank})}}/>
            <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
                <Card style={{ padding: '10px' }}>
                    <Card>
                        <Charts data={this.state.data} title={this.state.title} xaxis={this.state.xaxis} yaxis={this.state.yaxis} graph={this.state.graph} />
                    </Card>
                </Card>
            </Card>
          </>
        );
    }
}
