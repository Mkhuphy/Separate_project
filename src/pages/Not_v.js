import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, getProfile } from './Firebase';

export default function Not_v() {
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
    <div className='rewards1'>
      You are not verified
    </div>
  )
}
