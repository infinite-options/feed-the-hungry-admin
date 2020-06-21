import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Charts extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        var options = {}
        switch (this.props.graph) {
            case 'bar':
                console.log('matched bar')
                options = {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: this.props.title
                    },
                    xAxis: {
                        categories: this.props.xaxis
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: this.props.yaxis
                        }
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Share',
                        showInLegend: false,
                        data: this.props.data
                    }]
                }
                break;
            case 'pie':
                console.log('matched pie')
                options = {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        }
                    },
                    title: {
                        text: this.props.title
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    legend: {
                      enabled: false
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.y}'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: 'Share',
                        colorByPoint: true,
                        data: this.props.data
                    }]
                }
                break;
            case 'combo':
                console.log('matched combo')
                options = {
                  title: {
                    text: this.props.title
                  },
                  xAxis: {
                    categories: this.props.xaxis
                  },
                  yAxis: [{
                    min: 0,
                    title: {
                      text: this.props.yaxis[0]
                    },
                    labels: {
                      format: '${value}'
                    }
                  }, {
                    min: 0,
                    title: {
                      text: this.props.yaxis[1]
                    },
                    opposite: true
                  }],
                  series: [{
                    type: 'bar',
                    data: this.props.data[0],
                    name: 'Total Donation',
                    showInLegend: true,
                    colorByPoint: false
                  }, {
                    type: 'scatter',
                    data: this.props.data[1],
                    name: 'Total Quantity',
                    showInLegend: true,
                    color: 'black',
                    tooltip: {
                      pointFormat: '<b>{point.y}</b>'
                    },
                    marker: {
                      symbol: 'circle'
                    },
                    yAxis: 1
                  }]
                }
                break;
            default:
                options = {}
        }


        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        )
    }
}
