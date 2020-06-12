import React, { Component } from 'react'
import { Row, Col, Card, Dropdown, DropdownButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Charts from './Charts'
import Filter from './Filter'
import axios from 'axios'

export default class Donors extends Component {
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
            search_st: new Date('2016-01-01'),
            search_et: new Date(),
        }
    }


    componentDidMount = () => {
        this.donordonation()
    }

    updateDate = async (data) => {
        const start_date = new Date(this.state.search_st)
        const end_date = new Date(this.state.search_et)
        
        const temp =  data.filter(obj => {
            const obj_date = new Date(obj.donation_date)
            console.log(obj_date);
            return (obj_date >= start_date && obj_date <= end_date)
          })
        return temp
    }

    donordonation = async () => {
        var resp = []
        var xaxis = []
        var data = []
        await axios.get(`${this.state.base}donordonation`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )
            
        resp = await this.updateDate(resp)
        resp.sort((a, b) => (a.totalDonation < b.totalDonation) ? 1 : -1)

        resp.map(object => {
            xaxis.push(object.donor_first_name)
            data.push(object.totalDonation)
        })

        this.setState({
            ...this.state,
            data: data,
            xaxis: xaxis,
            yaxis: 'Donation in Rupees',
            title: 'Total Donations',
            graph: 'bar'
        })
    }

    foodtypes = async () => {
        var resp = []
        var data = []
        var dict = {}
        await axios.get(`${this.state.base}foodtypes`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
            object.fl_type in dict ? dict[object.fl_type] += object.total : dict[object.fl_type] = object.total
        })


        for (const [key, value] of Object.entries(dict)) {
            data.push({
                name: key,
                y: value
            })
        }

        this.setState({
            ...this.state,
            data: data,
            title: 'Total Donations by Type',
            xaxis: '',
            yaxis: '',
            graph: 'pie'
        })
    }

    itemdonations = async () => {
        var resp = []
        var data = []
        var dict = {}
        await axios.get(`${this.state.base}itemdonations`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
            object.fl_name in dict ? dict[object.fl_name] += object.TotalDonation : dict[object.fl_name] = object.TotalDonation
        })


        for (const [key, value] of Object.entries(dict)) {
            data.push({
                name: key,
                y: value
            })
        }

        this.setState({
            ...this.state,
            data: data,
            title: 'Total Donations by Number of Items',
            graph: 'pie'
        })
    }


    updateSearch = async state => {
        this.setState({
            ...this.state,
            search_c: state.search_c,
            search_d: state.search_d,
            search_f: state.search_f,
            search_st: state.search_st,
            search_et: state.search_et
        })
        await this.donordonation()
    }


    render() {
        return (
            <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
                <Row>
                    <Col xs="5">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} style={{ fontSize: 15 }} onClick={() => this.donordonation()}>Donor Donations</ToggleButton>
                            <ToggleButton value={2} style={{ fontSize: 15 }} onClick={() => this.itemdonations()}>Item Donations</ToggleButton>
                            <ToggleButton value={3} style={{ fontSize: 15 }} onClick={() => this.foodtypes()}>Food Types</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Filter update={this.updateSearch} />
                </Row>
                <Card style={{ padding: '10px' }}>
                    <Card>
                        <Charts data={this.state.data} title={this.state.title} xaxis={this.state.xaxis} yaxis={this.state.yaxis} graph={this.state.graph} />
                    </Card>
                </Card>
            </Card>
        );
    }
}

