"use client";

import config from "devextreme/core/config";
import { licenseKey } from "../devextreme-license.js";

config({ licenseKey });

import React from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";
import SelectBox from "devextreme-react/select-box";
import service from "./data";

interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Title: string;
}

const Detail: React.FC = () => {
  const employees: Employee[] = service.getEmployees();

  const getDisplayExpr = (item: Employee | null): string => {
    return item ? `${item.FirstName} ${item.LastName}` : "";
  };

  return (
    <>
      <div className="m-3 p-3 border border-red-400 flex">
        <DataGrid
          className="justify-center w-[500px] border-2 rounded-lg m-3"
          dataSource={employees}
          keyExpr="ID"
        >
          <Column dataField="ID" width={50} alignment="left" />
          <Column dataField="FirstName" width={100} alignment="left" />
          <Column dataField="LastName" width={100} alignment="center" />
          <Column dataField="Title" width={100} alignment="center" />
        </DataGrid>
        <SelectBox
          className="w-[500px] h-10 m-3 items-end"
          dataSource={employees}
          valueExpr="ID"
          displayExpr={getDisplayExpr}
        />
      </div>
    </>
  );
};

export default Detail;
