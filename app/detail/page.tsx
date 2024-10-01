"use client";

import config from "devextreme/core/config";
import { licenseKey } from "../devextreme-license.js";

config({ licenseKey });

import React from "react";

import "devextreme/dist/css/dx.light.css";

import DataGrid, { Column } from "devextreme-react/data-grid";
import SelectBox from "devextreme-react/select-box";

import service from "./data.js";

interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Title: string;
}

class Detail extends React.Component {
  employees: Employee[];
  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
  }

  getDisplayExpr(item) {
    return item && item.FirstName + " " + item.LastName;
  }

  render() {
    return (
      <>
        <div className="m-3 p-3 border border-red-400 flex">
          <DataGrid
            className="justify-center w-[500px] border-2 rounded-lg m-3"
            dataSource={this.employees}
            keyExpr="ID"
          >
            <Column dataField="ID" width={50} alignment="left" />
            <Column dataField="FirstName" width={100} alignment="left" />
            <Column dataField="LastName" width={100} alignment="center" />
            <Column dataField="Title" width={100} alignment="center" />
          </DataGrid>
          <SelectBox
            className="w-[500px] h-10 m-3 items-end"
            dataSource={this.employees}
            valueExpr="ID"
            displayExpr={this.getDisplayExpr}
          />
        </div>
      </>
    );
  }
}
export default Detail;
