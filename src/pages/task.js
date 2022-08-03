import React from 'react'
import Sidebar from "../components/Navbar/Sidebar";
import Papa from "papaparse"
import { useState } from 'react';
import "../index.css";

export default function Task() {

  const link = "https://docs.google.com/spreadsheets/d/1KQMG_zvagyfPMs4cmIEUvY7bK79XkI6dDxahZYFjeQE/gviz/tq?tqx=out:csv&sheet=Football"; 
  const [res1,setResult1] = useState([]);
  const [res2,setResult2] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

    Papa.parse(link, {
      download: true,
      worker: true,
      // dynamicTyping: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });

// moon();
// console.log('hello');
  return (
    <div>
      <p>Hello akwjdehukweFKJN</p>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Insta Link</th>
            <th>facebook Link</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}
                  {/* <a >INSTAGRAM - {index+1}</a> */}
                  </td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
