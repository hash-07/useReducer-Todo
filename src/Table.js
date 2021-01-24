import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
 const [gridApi, setGridApi] = useState(null);
 const [gridColumnApi, setGridColumnApi] = useState(null);
 const [response, setResponse] = useState({});


 useEffect(() => {
    axios
   .get("https://sutradhar.tech:8082/api/global", {
    params: {
     AppShortName: "shg",
     api: "getSinglebooking",
     bookingrecno: 5,
    },
    headers: {
     "cache-control": "no-cache",
     Accept: "application/json",
     'Access-Control-Allow-Origin' : '*',
     "Content-Type": "application/json; charset=utf-8",
    },
   })
   .then((response) => {
    console.log(response.data);
    setResponse(response.data);
    setRowData(response.data.Items);
   })
   .catch((error) => {
    console.log(error);
   });
  }, []);



 const [rowData, setRowData] = useState([
 ]);

 const headStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  left: "100px",
 };

 const fieldStyle={
    display: "flex",
    justifyContent: "center",
    flexDirection: 'row',
    padding: '50px'
 }

 function calculate() {              
    var my1 = document.getElementById('salerate').value;
    var my2 = document.getElementById('qty').value;
    var result = document.getElementById('total');
    var myResult = parseInt(my1) * parseInt(my2);
    result.value = myResult;     
}

 return (
     <>
     <div style={fieldStyle}>
         <input style={{marginLeft: '-600px'}} type="text" placeholder="Customer name"/><br/>
         <input type="date" /><br/>
     </div>
  <div
   className="ag-theme-alpine"
   style={{ height: 700, width: 1000, marginLeft: "300px" }}
  >
   <AgGridReact rowData={rowData}>
    <div style={headStyle}>
     <AgGridColumn field="itemdescn"></AgGridColumn>
     <AgGridColumn field="itemcode"></AgGridColumn>
     <AgGridColumn id="salerate" field="salerate"></AgGridColumn>
     <AgGridColumn id="qty" field="qty"></AgGridColumn>
     <AgGridColumn field="total"></AgGridColumn>
    </div>
   </AgGridReact>
  </div>

  
  </>
 );
};

export default App;
