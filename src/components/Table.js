import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class Table extends Component {
  render() {

    return (
      <div style={{ height: '370px', width: '100%' }} className="ag-theme-balham">
        <AgGridReact
          columnDefs={this.props.columns}
          rowData={this.props.data}
          pagination={true}
          suppressSizeToFit={true}
          defaultColDef={{ resizable: true }}
          paginationPageSize={10}>
        </AgGridReact>
      </div>
    )
  }
}
