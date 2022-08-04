import userEvent from "@testing-library/user-event";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button, Modal, Accordion } from "flowbite-react";
import  { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Sidebar from "../components/Navbar/Sidebar";
// import "./style.css";
import "../index.css";
import React from 'react'
import Papa from "papaparse"
import "../index.css";




export default function Task() {
  const [user, loading] = useAuthState(auth);
  const [data1, setData1] = useState("RRR");
  const [data2, setData2] = useState("RRR");
  const [data3, setData3] = useState("RRR");
  const [data4, setData4] = useState("RRR");
  const [data5, setData5] = useState("RRR");
  const [data6, setData6] = useState("RRR");
  const [data7, setData7] = useState("RRR");
  const [data8, setData8] = useState("RRR");
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const text = <i class="material-icons">star</i>;
  const text1 = <i class="material-icons">star_half</i>;
  let j = 0;
  let mul_text = "";
  let i = 0;
  let k = 0;
  let a = 0;
  const elements1 = ["", text, text, text, text, text];
  mul_text = text + text;

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

  }, [user, loading]);

  const sun = async () => {
    const snap = await getDoc(doc(db, "People", user.uid));

    if (snap.exists()) {
      // console.log(typeof(snap.data()['fb']));
      setData1(snap.data()["college"]);
      setData2(snap.data()["email"]);
      setData3(snap.data()["fb"]);
      setData4(snap.data()["insta"]);
      setData5(snap.data()["linkedin"]);
      setData6(snap.data()["name"]);
      setData7(snap.data()["phone"]);
      setData8(snap.data()["twitter"]);
      console.log(data1);
      console.log(snap.data()["fb"]);
      // console.log("bulb");
      return snap;
    } else {
      console.log("No such document");
    }
  };
  sun();

  const link = "https://docs.google.com/spreadsheets/d/1KQMG_zvagyfPMs4cmIEUvY7bK79XkI6dDxahZYFjeQE/gviz/tq?tqx=out:csv&sheet=Football"; 
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
    })

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="basis-1/4">
          <Sidebar name ={data6} collage={data1} />
        </div>
        <div className="basis-3/4 p-3">
          
          <div className="maitn1">
            {/* <p className="text-green-500">Name: {data6}</p>
            <p>Email Id: {data2}</p>
            <p>Phone Number: {data7}</p>
            <p>College: {data1}</p>
            <p>Facebook Id: {data3}</p>
            <p>Instagram Id: {data4}</p>
            <p>LinkedIn Id: {data5}</p>
            <p>Twitter Id: {data8}</p> */}

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
        </div>
      </div>
    </>
  );
}

