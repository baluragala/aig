import React from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ]
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/15psn9")
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }));
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "600px"
        }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default DataGrid;
