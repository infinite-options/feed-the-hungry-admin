import React, { Component } from 'react'
import { Row, Col, Card, Dropdown, DropdownButton, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Charts from './Charts'
import Table from './Table'
import Filter from './Filter'
import NavBar from './NavBar'
import axios from 'axios'

export default class Orders extends Component {
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
        this.deliveries()
    }

    deliveries = async () => {
        var resp = []
        var xaxis = []
        var data = []
        var dict = {}
        var banks = []
        await axios.get(`${this.state.base}deliveries`)
            .then(response => {
                resp = response.data.result.result
                console.log(resp);
            })
            .catch(error => console.log(error)
            )
        resp.map(object => {
            if (object.fb_name === this.state.search_d || this.state.search_d === '') {
              let temp = new Date(object.delivery_date)
              console.log(temp.getMonth());
              temp.getMonth() in dict ? dict[temp.getMonth()] += 1 : dict[temp.getMonth()] = 1
            }
            if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
        })
        const yearmap = {1 : 'Jan', 2: 'Feb',3:'Mar',4:'Apr',5:'May',6:'June',7:'July',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'}
        for (const [key, value] of Object.entries(dict)) {
            xaxis.push(yearmap[key])
            data.push(value)
        }

        this.setState({
            ...this.state,
            data: data,
            xaxis: xaxis,
            yaxis: 'No of Orders',
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
        this.deliveries()
    }


    render() {
        return (
          <>
            <NavBar ddlist={this.state.banks} update={async bank => {await this.updateSearch({...this.state, search_d: bank})}}/>
              <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
                <Row>
                    <Filter ddlist={[]} update={this.updateSearch} />
                </Row>
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
