import React, { Component } from 'react'
import { Row, Col, Card, Dropdown, DropdownButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import NavBar from './NavBar'
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
            mode: '1',
            dd: 'byname',
            banks: []
        }
    }


    componentDidMount = async () => {
        await this.donordonationbyname()
    }

    updateDate = async (data) => {
        const start_date = new Date(this.state.search_st)
        const end_date = new Date(this.state.search_et)

        const temp = data.filter(obj => {
            const obj_date = new Date(obj.donation_date)
            return (obj_date >= start_date && obj_date <= end_date)
        })
        return temp
    }

    donordonationbyname = async () => {
        var resp = []
        var xaxis = []
        var data = []
        var data2 = []
        var banks = []
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
            if (object.fb_name === this.state.search_d || this.state.search_d === '') {
              xaxis.push(object.donor_first_name)
              data.push(object.totalDonation)
              data2.push(object.total_qty)
            }
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
        })

        this.setState({
            ...this.state,
            data: [data, data2],
            xaxis: xaxis,
            yaxis: ['Donation Value', 'Quantity Donated'],
            title: 'Donations',
            graph: 'combo',
            mode: '1',
            dd: 'byname',
            banks: banks
        })
    }

    donordonationbydate = async () => {
        var resp = []
        var xaxis = []
        var data = []
        var data2 = []
        var banks = []
        await axios.get(`${this.state.base}donordonation`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp = await this.updateDate(resp)

        resp.sort((a, b) => (new Date(a.donation_date) > new Date(b.donation_date)) ? 1 : -1)

        resp.map(object => {
            if (object.fb_name === this.state.search_d || this.state.search_d === '') {
              xaxis.push(object['donation_date'].split(" ")[0])
              data.push(object.totalDonation)
              data2.push(object.total_qty)
            }
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
        })

        this.setState({
            ...this.state,
            data: [data, data2],
            xaxis: xaxis,
            yaxis: ['Donation Value', 'Quantity Donated'],
            title: 'Donations',
            graph: 'combo',
            mode: '1',
            dd: 'bydate',
            banks: banks
        })
    }

    foodtypes = async () => {
        var resp = []
        var data = []
        var dict = {}
        var banks = []
        await axios.get(`${this.state.base}foodtypes`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
            if (object.fb_name === this.state.search_d || this.state.search_d === '')
              object.fl_type in dict ? dict[object.fl_type] += object.totalDonation : dict[object.fl_type] = object.totalDonation
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
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
            graph: 'pie',
            mode: '3',
            banks: banks
        })
    }

    itemdonations = async () => {
        var resp = []
        var data = []
        var dict = {}
        var banks = []
        await axios.get(`${this.state.base}itemdonations`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )

        resp.map(object => {
          if (object.fb_name === this.state.search_d || this.state.search_d === '')
            object.fl_name in dict ? dict[object.fl_name] += object.totalDonation : dict[object.fl_name] = object.totalDonation
          if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
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
            graph: 'pie',
            mode: '2',
            banks: banks
        })
    }

    changeMode = async (mode,dd) => {
        switch (mode) {
            case '1':
                if (dd === 'byname') {
                    await this.donordonationbyname()
                }
                else {
                    await this.donordonationbydate()
                }
                break;
            case '2':
                await this.itemdonations()
                break;
            case '3':
                await this.foodtypes()
                break;
            case '11':
                await this.donordonationbyname()
                break;
            case '12':
                await this.donordonationbydate()
                break;
        }
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
        await this.changeMode(this.state.mode, this.state.dd)
    }


    render() {
        return (
          <>
            <NavBar ddlist={this.state.banks} update={async bank => {await this.updateSearch({...this.state, search_d: bank})}}/>
            <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
                <Row>
                    <Col xs="5">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value, this.state.dd)}>Donor Donations</ToggleButton>
                            <ToggleButton value={2} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value)}>Item Donations</ToggleButton>
                            <ToggleButton value={3} style={{ fontSize: 15 }} onClick={(e) => this.changeMode(e.target.value)}>Food Types</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Filter update={this.updateSearch}/>
                </Row>
                <Card style={{ padding: '10px' }}>
                    <Card>
                        {this.state.mode === '1'?
                        (<Row>
                            <Col xs="12">
                                <ToggleButtonGroup style={{margin: '5px'}} className="float-right" type="radio" name="options" defaultValue={this.state.dd === 'byname' ? 11 : 12}>
                                    <ToggleButton value={11} style={{ fontSize: 10 }} onClick={(e) => {this.setState({dd: 'byname'}); this.changeMode(e.target.value)}}>By Name</ToggleButton>
                                    <ToggleButton value={12} style={{ fontSize: 10 }} onClick={(e) => {this.setState({dd: 'bydate'}); this.changeMode(e.target.value)}}>By Date</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>) : (<div></div>)}
                            <Charts data={this.state.data} title={this.state.title} xaxis={this.state.xaxis} yaxis={this.state.yaxis} graph={this.state.graph} />

                    </Card>
                </Card>
            </Card>
          </>
        );
    }
}
