import userEvent from "@testing-library/user-event";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import { collection, collectionGroup, doc, getDoc, getDocs, where } from "firebase/firestore";
import { Button, Modal, Accordion } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Sidebar from "../components/Navbar/Sidebar";
import { query, orderBy, limit } from "firebase/firestore"; 
// import "./style.css";
import "../index.css";
export default function Leaderboard() {
  const [user, loading] = useAuthState(auth);
  const [data1, setData1] = useState("RRR");
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState("RRR");
  const [data7, setData7] = useState(0);
  const [data8, setData8] = useState("RRR");
  const [data9, setData9] = useState("RRR");
  const [data10, setData10] = useState("RRR");
  const [data11, setData11] = useState(0);
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
    const snap = await getDoc(doc(db, "People/", user.uid,"/points/points"));


    
    if (snap.exists()) {

      setData11(snap.data()["total"]);
      
      return snap;
    } else {
      console.log("No such document");
    }
  };
  sun();

  const sun1 = async () => {
    const snap = await getDoc(doc(db, "People/", user.uid));

    if (snap.exists()) {

      setData1(snap.data()["college"]);
      setData6(snap.data()["name"]);
      setData9(snap.data()["referral_id"]);
      setData10(snap.data()["url"]);
      // console.log("bulb");
      return snap;
    } else {
      console.log("No such document");
    }
  };
  sun1();
  
    const sun2 = async () => {
      var i = 0;
      const museums = query(collectionGroup(db, 'points'), orderBy("total","desc"), limit(5));
      const querySnapshot = await getDocs(museums);
      querySnapshot.forEach((doc,index) => {
        // const snap = await getDoc(doc);
      i=i+1;
      // console.log(doc.id, ' => ', doc.data());
      if(i==1)
      {
        setData2(doc.data()['total']);
      }
      if(i==2)
      {
        setData3(doc.data()['total']);
      }
      if(i==3)
      {
        setData4(doc.data()['total']);
      }
      if(i==4)
      {
        setData5(doc.data()['total']);
      }
      if(i==5)
      {
        setData7(doc.data()['total']);
      }
    });
    i=0;
    };
    sun2();
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="basis-1/4">
          <Sidebar name ={data6} collage={data1} url={data10}/>
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
            <div className="rewards1">
              <h1>Your referral-id is:     {data9}</h1>
            </div>
            <table class="styled-table1">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Your score</td>
                    <td>{data11}</td>
                  </tr>
              </tbody>
            </table>

            <div className="rewards2">
                  <h1>OUR TOP CONTESTANTS.</h1>
            </div>

            <table class="styled-table">
            <thead>
        <tr>
            <th>S NO.</th>
            <th>POINTS</th>
        </tr>
    </thead>
              <tbody>
                  <tr>
                    <td>1.</td>
                    <td>{data2}</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>{data3}</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>{data4}</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>{data5}</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>{data7}</td>
                  </tr>
              </tbody>
            </table>


<div className="rewards">
  <h1>WE ALSO HAVE SOME REWARDS FOR YOU</h1>
</div>
<table class="styled-table">
    <thead>
        <tr>
            <th>Task </th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td>Like and Share on Facebook</td>
            <td>20</td>
        </tr>

        <tr>
            <td>Updating job profile on Linkedin</td>
            <td>60</td>
        </tr>

        <tr>
            <td>sharing the posts as insta story</td>
            <td>30</td>
        </tr>

        <tr>
            <td>If Rf is used for registration</td>
            <td>40</td>
        </tr>

        <tr>
            <td>Last year participants coming back(Loyalty)</td>
            <td>50</td>
        </tr>

        <tr>
            <td>Pre-registration</td>
            <td>50</td>
        </tr>

        <tr>
            <td>if write a blog and this blog is verified </td>
            <td>60</td>
        </tr>

        <tr>
            <td>Upgradation of Level</td>
            <td>50</td>
        </tr>

        <tr>
            <td>Event Organizing in your city</td>
            <td>100</td>
        </tr>

    </tbody>
</table>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="grind">
             <p>Lorem ipsum ditate!</p> 
            <ul>
              {elements1.map((value, index) => {
                i++;
                if (i <= a) {
                  j = i;
                } else {
                  j = 0;
                }

                return (
                  <div className="star">
                    <p>{elements1[j]}</p>
                  </div>
                );
              })}
            </ul>

            <ul>
              {elements1.map((value, index) => {
                k++;
                if (k <= 5 - a) {
                  j = k;
                } else {
                  j = 0;
                }

                return (
                  <div className="star1">
                    <p>{elements1[j]}</p>
                  </div>
                );
              })}
            </ul>
          </div> */
}
