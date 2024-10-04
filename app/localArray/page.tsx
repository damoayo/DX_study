"use client";

import React from "react";

import "devextreme/dist/css/dx.light.css";

import DataGrid from "devextreme-react/data-grid";

const jsonUrl = "https://jsonplaceholder.typicode.com/posts";

class LocalArray extends React.Component {
  render() {
    return <DataGrid className="w-[800px] scale-75" dataSource={jsonUrl} />;
  }
}
export default LocalArray;
