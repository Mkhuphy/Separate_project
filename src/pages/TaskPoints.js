import userEvent from "@testing-library/user-event";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, setProfile, uploadImage } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Button, Modal, Accordion } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Sidebar from "../components/Navbar/Sidebar";
// import "./style.css";
import "../index.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./style.css";



export default function TaskPoints() {
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
  const signOut = () => {
    logout();
    navigate("/")
  }
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
 

  return (
    <>
      <div >
        <div className="basis-1/4">
          {/* <Sidebar name ={data6} collage={data1} /> */}
        </div>
        <div >
          
          <div className="maitn1">
            
          <li>
              <a
                onClick={signOut}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap" onClick={signOut}>Sign Out</span>
              </a>
            </li>
 <br/>
 <br/>
 <br/>

<div className="verify">
 <h1>Verification is under 
    <br/>process</h1>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

 
 <ProgressBar
        percent={50}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    
      >
                <Step transition="scale">
          {({ accomplished }) => (
            <div>
                
            <img 
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%) ` }}
              width="30"
              src='./logo.png'
            
            />
            {/* <p>Details filled</p> */}   
            </div>
          )}
  
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./logo.png"
            />
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="./logo.png"
            />

            </div>
          )}
        </Step>
      </ProgressBar>

      <div className="verify2">
 <h1></h1>
 </div>
 <div className="verify1">
 <h1>You are almost there!!</h1>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 
 
      <ProgressBar
        percent={100}
        filledBackground="linear-gradient(to right, rgb(93, 135, 135), rgb(44, 100, 100))"
      ></ProgressBar>
          </div>
        </div>

      </div>
    </>
  );
}
