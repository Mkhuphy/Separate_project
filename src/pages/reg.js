import React, { useEffect, useState } from 'react';
import 'bootstrap';
import { signInWithGoogle, signInWithFacebook, db, auth, getProfile } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc , getDoc } from "firebase/firestore";

const Reg = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) {
        async function callAsync() {
          const docRef = await getProfile(user.uid);
          if(docRef.exists()){
            console.log(docRef.data())
            navigate("/Dashboard")
          }else{
            navigate("/details");
          }
        }
        callAsync();

       
      }
    }, [user, loading]);
    return (

        <div style={{textAlign: 'center', marginTop: '10%', width: '300px', height: '300px', margin:'auto', marginTop: '10%'}}>
            <img style={{width: '100px', height: '100px'}} src='./logo.png'  />
            
            <h1>UDGHOSH'22</h1>
            

            <div style={{marginTop: '3%'}}>
            <button style={{width: "250px"}} type="button" className="btn btn-primary btn-lg" onClick={signInWithFacebook}><i className="bi bi-facebook"></i>  Login With Facebook</button>
            <br/>
            <br/>
            <button style={{width: "250px"}} type="button" className="btn btn-secondary btn-lg" onClick={signInWithGoogle}><i className="bi bi-google"></i>  Login with Google</button>
            </div>


        </div>

    );
};


export default Reg;