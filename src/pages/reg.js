import React, { useEffect, useState } from 'react';
import 'bootstrap';
import { signInWithGoogle, signInWithFacebook, db, auth, getProfile } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc , getDoc } from "firebase/firestore";
import GoogleButton from 'react-google-button'
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
          console.log(docRef);
          if(docRef.exists()){
            console.log(docRef.data())
            const snap = await getDoc(doc(db, "Admins", user.uid));
            const t = snap.data()["verified"];
            // console.log(t);
            if(t==true){
            navigate("/home");
          }
          else{
            navigate("/notv");
          }
          }else{
            console.log("not identified");
            navigate("/details");
          }
        }
        callAsync();

       
      }
    }, [user, loading]);
    return (

        <div style={{textAlign: 'center', marginTop: '10%', width: '300px', height: '300px', margin:'auto', marginTop: '10%'}}>
            <img style={{width: '100px', height: '150px'}} src='./logo.png'  />
            
            <h1>UDGHOSH'22</h1>
            

            <div style={{marginTop: '3%'}}>

            {/* <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={signInWithGoogle}>
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="false" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Sign in with Google
            </button> */}
            <GoogleButton
              onClick={signInWithGoogle}
            />

            </div>
            
            {/* <a href="https://drive.google.com/uc?export=view&id=1M1LmBv0UTjvibCSOe3fLhdD5A6TZEKiv">
    <img src="https://drive.google.com/uc?export=view&id=1M1LmBv0UTjvibCSOe3fLhdD5A6TZEKiv"
    style="width: 500px; max-width: 100%; height: auto"
    title="Click for the larger version." />
</a> */}
        </div>

    );
};


export default Reg;