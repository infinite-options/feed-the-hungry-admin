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
          title: 'Orders',
          xaxis: '',
          yaxis: '',
          graph: '',
          banks: []
      }
  }


  componentDidMount = () => {
      this.orderdetails()
  }

  orderdetails = async () => {
      var resp = []
      var banks = []
      await axios.get(`${this.state.base}orderdetails`)
          .then(response => {
              resp = response.data.result.result;
              console.log(resp)
          })
          .catch(error => console.log(error))
      resp.forEach(object => {
          if (!banks.includes(object.fb_name)) banks.push(object.fb_name)
      })
      await this.setState({
          ...this.state,
          orders: resp,
          banks: banks,
      })
      this.sortbycustomer()
  }

  sortbycustomer = async () => {
      var dict = {}
      var data = []
      var data1 = []
      var xaxis = []
      this.state.orders.forEach(order => {
          if (order.fb_name === this.state.search_d || this.state.search_d === '') {
              if (order.customer_name in dict) {
                dict[order.customer_name][0] += order.Total_Value
                dict[order.customer_name][1] += order.Total_Items
              } else {
                dict[order.customer_name] = [order.Total_Value, order.Total_Items]
              }
          }
      })
      let entries = Object.entries(dict)
      entries.sort((a, b) => a[0] < b[0] ? -1 : 1)
      for (const [key, value] of entries) {
          xaxis.push(key)
          data.push(parseFloat(value[0].toFixed(2)))
          data1.push(value[1])
      }
      this.setState({
          ...this.state,
          data: [data, data1],
          xaxis: {categories: xaxis},
          yaxis: ['Total Value', 'Number of Items'],
          graph: 'combo'
      })
  }

  sortbytype = async() => {
      var dict = {}
      var data = []
      var data1 = []
      var xaxis = []
      this.state.orders.forEach(order => {
          let dorp = order.o_delivery_pickup ? 'Delivery' : 'Pickup'
          if (order.fb_name === this.state.search_d || this.state.search_d === '') {
              if (dorp in dict) {
                dict[dorp][0] += order.Total_Value
                dict[dorp][1] += order.Total_Items
              } else {
                dict[dorp] = [order.Total_Value, order.Total_Items]
              }
          }
      })
      let entries = Object.entries(dict)
      entries.sort((a, b) => a[0] < b[0] ? -1 : 1)
      for (const [key, value] of entries) {
          xaxis.push(key)
          data.push(parseFloat(value[0].toFixed(2)))
          data1.push(value[1])
      }
      this.setState({
          ...this.state,
          data: [data, data1],
          xaxis: {categories: xaxis},
          yaxis: ['Total Value', 'Number of Items'],
          graph: 'combo'
      })
  }

  sortbyday = async() => {
      var dict = {}
      var data = []
      var data1 = []
      var xaxis = []
      this.state.orders.forEach(order => {
          if (order.fb_name === this.state.search_d || this.state.search_d === '') {
              if (order.delivery_date in dict) {
                dict[order.delivery_date][0] += order.Total_Value
                dict[order.delivery_date][1] += order.Total_Items
              } else {
                dict[order.delivery_date] = [order.Total_Value, order.Total_Items]
              }
          }
      })
      let entries = Object.entries(dict)
      entries.sort((a, b) => a[0] < b[0] ? -1 : 1)
      for (const [key, value] of entries) {
          xaxis.push(key)
          data.push(parseFloat(value[0].toFixed(2)))
          data1.push(value[1])
      }
      this.setState({
          ...this.state,
          data: [data, data1],
          xaxis: {categories: xaxis},
          yaxis: ['Total Value', 'Number of Items'],
          graph: 'combo'
      })
  }

  sortbymonth = async() => {
      var dict = {}
      var data = []
      var data1 = []
      var xaxis = []
      const month_strings = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']
      this.state.orders.forEach(order => {
          if (order.fb_name === this.state.search_d || this.state.search_d === '') {
              let month = parseInt(order.delivery_date.split('-')[0])
              month = month_strings[month]
              if (month in dict) {
                dict[month][0] += order.Total_Value
                dict[month][1] += order.Total_Items
              } else {
                dict[month] = [order.Total_Value, order.Total_Items]
              }
          }
      })
      let entries = Object.entries(dict)
      entries.sort((a, b) => month_strings.indexOf(a[0]) < month_strings.indexOf(b[0]) ? -1 : 1)
      for (const [key, value] of entries) {
          xaxis.push(key)
          data.push(parseFloat(value[0].toFixed(2)))
          data1.push(value[1])
      }
      this.setState({
          ...this.state,
          data: [data, data1],
          xaxis: {categories: xaxis},
          yaxis: ['Total Value', 'Number of Items'],
          graph: 'combo'
      })
  }

  sortbylocation = async() => {

  }

  updateSearch = state => {
      this.setState({
          ...this.state,
          search_c: state.search_c,
          search_d: state.search_d,
          search_f: state.search_f,
      })
      this.orderdetails()
  }


  render() {
      return (
        <>
          <NavBar ddlist={this.state.banks} update={async bank => {await this.updateSearch({...this.state, search_d: bank})}}/>
          <Card style={{ backgroundColor: 'rgb(226, 226, 226)', padding: '10px' }}>
              <Row>
                  <Filter update={this.updateSearch}/>
              </Row>
              <Card style={{ padding: '10px' }}>
                  <Card>
                      <Col xs="12">
                          <ToggleButtonGroup style={{margin: '5px'}} className="float-right" type="radio" name="options" defaultValue={11}>
                              <ToggleButton value={11} style={{ fontSize: 10 }} onClick={() => this.sortbycustomer()}>By Customer</ToggleButton>
                              <ToggleButton value={12} style={{ fontSize: 10 }} onClick={() => this.sortbytype()}>By Type</ToggleButton>
                              <ToggleButton value={13} style={{ fontSize: 10 }} onClick={() => this.sortbyday()}>By Day</ToggleButton>
                              <ToggleButton value={14} style={{ fontSize: 10 }} onClick={() => this.sortbymonth()}>By Month</ToggleButton>
                          </ToggleButtonGroup>
                      </Col>
                      <Charts data={this.state.data} title={this.state.title} xaxis={this.state.xaxis} yaxis={this.state.yaxis} graph={this.state.graph} />
                  </Card>
              </Card>
          </Card>
        </>
      );
  }
}
